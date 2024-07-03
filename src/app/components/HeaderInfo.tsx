"use client";
import useCityname from "../hooks/cityname";
import useWeather from "../hooks/weather";
import HeaderInfoLoader from "./HeaderInfoLoader";
import WeatherIcon from "./weather/WeatherIcon";

export default function HeaderInfo() {
  const { cityname, isCitynameLoading, citynameError } = useCityname();
  const { weather, isWeatherLoading, error: weatherError } = useWeather();

  const isLoading = isCitynameLoading || isWeatherLoading;
  const error = citynameError || weatherError;

  return (
    <div className="flex items-center h-full basis-1/3 min-w-[130px] xs:w-[120px] ">
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
          <div className="flex items-center w-full xs:justify-end xs:text-sm sm:text-md text-lg font-bold">
            <p className="w-1/2">{cityname}</p>
            <p className="w-1/4">{Math.round(weather.temp)}℃</p>
            <div className="flex items-center w-1/4 h-full xs:hidden sm:hidden">
              <WeatherIcon icon={weather.icon} size="large" />
            </div>
          </div>
        )
      )}
    </div>
  );
}
