
import WeatherCard from "./WeatherCard";

interface ForecastDay {
  date: string;
  temperature: number;
  condition: string;
}

interface ForecastProps {
  forecast: ForecastDay[];
}

const Forecast = ({ forecast }: ForecastProps) => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-4 px-4">5-Day Forecast</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 px-4">
        {forecast.map((day) => (
          <WeatherCard
            key={day.date}
            temperature={day.temperature}
            condition={day.condition}
            date={day.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Forecast;
