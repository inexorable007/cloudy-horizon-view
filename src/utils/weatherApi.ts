
const API_KEY = "72a79b2f89a1fb43ac4babe979439b99"; // OpenWeatherMap API key

export interface WeatherData {
  current: {
    temperature: number;
    condition: string;
    humidity: number;
    windSpeed: number;
    feelsLike: number;
    uvIndex: number;
  };
  forecast: Array<{
    date: string;
    temperature: number;
    condition: string;
  }>;
}

export async function getWeatherData(city: string): Promise<WeatherData> {
  try {
    // Get current weather
    const currentWeatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    
    if (!currentWeatherResponse.ok) {
      throw new Error(`City not found or API error: ${currentWeatherResponse.statusText}`);
    }
    
    const currentData = await currentWeatherResponse.json();

    // Get 5-day forecast
    const forecastResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
    );
    
    if (!forecastResponse.ok) {
      throw new Error(`Forecast data not available: ${forecastResponse.statusText}`);
    }
    
    const forecastData = await forecastResponse.json();

    // Process current weather
    const current = {
      temperature: Math.round(currentData.main.temp),
      condition: currentData.weather[0].main,
      humidity: currentData.main.humidity,
      windSpeed: Math.round(currentData.wind.speed),
      feelsLike: Math.round(currentData.main.feels_like),
      uvIndex: 0 // OpenWeatherMap free tier doesn't include UV index
    };

    // Process forecast (get one reading per day)
    const forecast = forecastData.list
      .filter((item: any, index: number) => index % 8 === 0) // One reading per day
      .slice(0, 5) // Only take 5 days
      .map((item: any) => ({
        date: item.dt_txt.split(' ')[0],
        temperature: Math.round(item.main.temp),
        condition: item.weather[0].main
      }));

    return { current, forecast };
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
}
