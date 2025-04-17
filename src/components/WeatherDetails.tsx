
import { Wind, Droplets, Sun, Thermometer } from "lucide-react";

interface WeatherDetailsProps {
  humidity: number;
  windSpeed: number;
  feelsLike: number;
  uvIndex: number;
}

const WeatherDetails = ({ humidity, windSpeed, feelsLike, uvIndex }: WeatherDetailsProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mx-auto mt-6">
      <div className="glass-panel p-4 flex items-center gap-3">
        <Droplets className="h-5 w-5 text-blue-400" />
        <div>
          <p className="text-sm opacity-70">Humidity</p>
          <p className="font-semibold">{humidity}%</p>
        </div>
      </div>
      <div className="glass-panel p-4 flex items-center gap-3">
        <Wind className="h-5 w-5 text-blue-400" />
        <div>
          <p className="text-sm opacity-70">Wind Speed</p>
          <p className="font-semibold">{windSpeed} km/h</p>
        </div>
      </div>
      <div className="glass-panel p-4 flex items-center gap-3">
        <Thermometer className="h-5 w-5 text-blue-400" />
        <div>
          <p className="text-sm opacity-70">Feels Like</p>
          <p className="font-semibold">{Math.round(feelsLike)}°C</p>
        </div>
      </div>
      <div className="glass-panel p-4 flex items-center gap-3">
        <Sun className="h-5 w-5 text-blue-400" />
        <div>
          <p className="text-sm opacity-70">UV Index</p>
          <p className="font-semibold">{uvIndex}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
