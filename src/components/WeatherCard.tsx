
import { Card, CardContent } from "@/components/ui/card";
import { 
  Cloud, 
  CloudRain, 
  Sun, 
  CloudSnow,
  CloudLightning,
  CloudDrizzle
} from "lucide-react";

interface WeatherCardProps {
  temperature: number;
  condition: string;
  date?: string;
}

const WeatherCard = ({ temperature, condition, date }: WeatherCardProps) => {
  const getWeatherIcon = () => {
    switch (condition.toLowerCase()) {
      case 'rain':
        return <CloudRain className="h-8 w-8" />;
      case 'clouds':
        return <Cloud className="h-8 w-8" />;
      case 'snow':
        return <CloudSnow className="h-8 w-8" />;
      case 'thunderstorm':
        return <CloudLightning className="h-8 w-8" />;
      case 'drizzle':
        return <CloudDrizzle className="h-8 w-8" />;
      default:
        return <Sun className="h-8 w-8" />;
    }
  };

  return (
    <Card className="weather-card">
      <CardContent className="flex flex-col items-center p-6 text-white">
        {getWeatherIcon()}
        <p className="text-3xl font-bold mt-2">{Math.round(temperature)}°C</p>
        <p className="text-sm mt-1 capitalize">{condition}</p>
        {date && <p className="text-xs mt-1 opacity-80">{date}</p>}
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
