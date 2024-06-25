"use client";
import { useCaster } from "../context/CasterContext";
import useLocation from "../hooks/location";
import useWeather from "../hooks/weather";
import HeaderInfoLoader from "./HeaderInfoLoader";
import RefreshIcon from "./RefreshIcon";
import WeatherIcon from "./weather/WeatherIcon";

export default function HeaderInfo() {
  const {
    location,
    cityName,
    isCityNameLoading,
    cityNameError,
    geolocationError,
  } = useLocation();
  const { weather, isWeatherLoading, error: weatherError } = useWeather();

  const isLoading = isCityNameLoading || isWeatherLoading;
  const error = cityNameError || geolocationError || weatherError;

  const handleRefresh = () => {};
  return (
    <div className="flex items-center h-full basis-1/3 ">
      <button
        aira-label="Page Refresh"
        onClick={handleRefresh}
        type="button"
        className="mr-2"
      >
        <RefreshIcon />
      </button>
      {isLoading || (!cityName && !weather) ? (
        <div className="flex items-center justify-around w-full h-full ">
          <HeaderInfoLoader />
          <HeaderInfoLoader />
        </div>
      ) : (
        !isLoading &&
        !error &&
        cityName &&
        weather && (
          <div className="flex items-center w-full ">
            <p className="text-xl font-bold w-1/2">{cityName}</p>
            <p className="text-lg font-bold w-1/4">
              {Math.round(weather.temp)}℃
            </p>
            <div className="flex items-center w-1/4 h-full">
              <WeatherIcon icon={weather.icon} size="large" />
            </div>
          </div>
        )
      )}
    </div>
  );
}
