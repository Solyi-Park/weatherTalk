"use client";

import useLocation from "../hooks/location";
import { useWeather } from "../context/WeatherContext";
import WeatherIcon from "./WeatherIcon";

export default function HeaderInfo() {
  const { cityName, isLoading, error: locationError } = useLocation();
  const { weather, error: weatherError } = useWeather();

  const error = locationError || weatherError;
  return (
    <div className="flex items-center">
      <p className="text-lg">{cityName || "---"}</p>
      {weather && !weatherError && !isLoading && (
        <div className="flex items-center">
          <WeatherIcon icon={weather.icon || ""} />
          <p className="text-lg font-bold">
            {Math.floor(weather.temp) || "--"}℃
          </p>
        </div>
      )}
    </div>
  );
}
