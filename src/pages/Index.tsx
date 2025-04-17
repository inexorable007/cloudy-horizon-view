import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import WeatherCard from "@/components/WeatherCard";
import WeatherDetails from "@/components/WeatherDetails";
import Forecast from "@/components/Forecast";
import Clock from "@/components/Clock";
import { Globe } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { getWeatherData, WeatherData } from "@/utils/weatherApi";

const Index = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const { toast } = useToast();

  const handleSearch = async (query: string) => {
    try {
      const data = await getWeatherData(query);
      setWeatherData(data);
      toast({
        title: "Location updated",
        description: `Weather information for ${query}`,
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to fetch weather data. Please check the city name and try again.",
      });
    }
  };

  return (
    <div className="min-h-screen p-4 md:p-8 relative overflow-hidden" 
         style={{
           background: "linear-gradient(to bottom right, #4A90E2, #87CEEB)"
         }}>
      {/* Background Globe Icon */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-5 pointer-events-none">
        <Globe className="w-96 h-96" />
      </div>
      
      <div className="max-w-4xl mx-auto space-y-8 relative z-10">
        <h1 className="text-3xl font-bold text-center text-white mb-8">
          Weather Dashboard
        </h1>
        
        <Clock />
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
