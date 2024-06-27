"use client";

import useCityname from "../hooks/cityName";
import useWeather from "../hooks/weather";
import HeaderInfoLoader from "./HeaderInfoLoader";
import WeatherIcon from "./weather/WeatherIcon";

export default function HeaderInfo() {
  const { cityname, isCitynameLoading, citynameError } = useCityname();
  const { weather, isWeatherLoading, error: weatherError } = useWeather();

  const isLoading = isCitynameLoading || isWeatherLoading;
  const error = citynameError || weatherError;

  return (
    <div className="flex items-center h-full basis-1/3 ">
      <button aira-label="Page Refresh" type="button" className="mr-2"></button>
      {isLoading || (!cityname && !weather) ? (
        <div className="flex items-center justify-around w-full h-full ">
          <HeaderInfoLoader />
          <HeaderInfoLoader />
        </div>
      ) : (
        !isLoading &&
        !error &&
        cityname &&
        weather && (
          <div className="flex items-center w-full ">
            <p className="text-xl font-bold w-1/2">{cityname}</p>
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
