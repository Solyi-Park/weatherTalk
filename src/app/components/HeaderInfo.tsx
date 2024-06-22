"use client";

import useLocation from "../hooks/location";
import { useWeather } from "../context/WeatherContext";
import WeatherIcon from "./weather/WeatherIcon";

export default function HeaderInfo() {
  const { cityName, isLoading, error: locationError } = useLocation();
  const { weather, error: weatherError } = useWeather();

  const error = locationError || weatherError;
  return (
    <div className="flex items-center justify-end h-full">
      <p className="text-xl font-bold mr-4">{cityName || "---"}</p>
      <div className="flex items-center h-full w-20">
        {weather && !weatherError && !isLoading && (
          <>
            <p className="text-lg font-bold">
              {Math.floor(weather.temp) || "--"}℃
            </p>
            <WeatherIcon icon={weather.icon} size="large" />
          </>
        )}
      </div>
    </div>
  );
}
