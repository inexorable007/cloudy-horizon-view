
import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import WeatherCard from "@/components/WeatherCard";
import WeatherDetails from "@/components/WeatherDetails";
import Forecast from "@/components/Forecast";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [weatherData, setWeatherData] = useState<any>(null);
  const { toast } = useToast();

  const handleSearch = async (query: string) => {
    try {
      // Simulate weather data - In a real app, this would be an API call
      const mockWeatherData = {
        current: {
          temperature: 22,
          condition: "Sunny",
          humidity: 65,
          windSpeed: 12,
          feelsLike: 24,
          uvIndex: 5
        },
        forecast: [
          { date: "2025-04-18", temperature: 22, condition: "Sunny" },
          { date: "2025-04-19", temperature: 20, condition: "Clouds" },
          { date: "2025-04-20", temperature: 19, condition: "Rain" },
          { date: "2025-04-21", temperature: 21, condition: "Clouds" },
          { date: "2025-04-22", temperature: 23, condition: "Sunny" },
        ]
      };
      
      setWeatherData(mockWeatherData);
      toast({
        title: "Location updated",
        description: `Weather information for ${query}`,
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to fetch weather data. Please try again.",
      });
    }
  };

  return (
    <div className="min-h-screen p-4 md:p-8" 
         style={{
           background: "linear-gradient(to bottom right, #4A90E2, #87CEEB)"
         }}>
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center text-white mb-8">
          Weather Dashboard
        </h1>
        
        <SearchBar onSearch={handleSearch} />

        {weatherData && (
          <div className="space-y-6">
            <div className="flex justify-center">
              <WeatherCard
                temperature={weatherData.current.temperature}
                condition={weatherData.current.condition}
              />
            </div>

            <WeatherDetails
              humidity={weatherData.current.humidity}
              windSpeed={weatherData.current.windSpeed}
              feelsLike={weatherData.current.feelsLike}
              uvIndex={weatherData.current.uvIndex}
            />

            <Forecast forecast={weatherData.forecast} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
