"use client";

import useLocation from "../hooks/location";
import Link from "next/link";
import { useWeather } from "../context/WeatherContext";
import WeatherIcon from "./WeatherIcon";

export default function Header() {
  const { cityName, isLoading } = useLocation();

  const { weather, error } = useWeather();

  return (
    <div className="flex items-center justify-between py-3 ">
      <Link href="/" aria-label="Home">
        <h1 className="font-bold text-3xl">WeatherTalk</h1>
      </Link>
      <div className="flex items-center">
        <p className="text-lg">{cityName || "--"}</p>
        {weather && !error && !isLoading && (
          <>
            <WeatherIcon icon={weather?.icon || ""} />
            <p className="text-lg">
              <span className="font-bold">
                {Math.floor(weather?.temp) || "--"}
              </span>{" "}
              ℃
            </p>
          </>
        )}
      </div>
    </div>
  );
}
