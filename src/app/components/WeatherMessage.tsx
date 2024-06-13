"use client";
import React, { useEffect, useState } from "react";
import { useCaster } from "../context/CasterContext";
import { useWeather } from "../context/WeatherContext";
import MarkDownViewer from "./MarkDownViewer";
import TextLoader from "./TextLoader";
import WeatherDetail from "./WeatherDetail";

export default function WeatherMessage() {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showWeatherDetail, setShowWeatherDetail] = useState(false);

  const { weather } = useWeather();
  const { caster } = useCaster();

  useEffect(() => {
    async function fetchWeatherMessage() {
      if (caster && weather) {
        try {
          setIsLoading(true);
          const response = await fetch("/api/weather-message", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ caster, weather }),
          });
          const data = await response.json();
          setMessage(data.message);
          setIsLoading(false);
        } catch (error) {
          console.error("Error fetching weather message:", error);
        }
      }
    }

    fetchWeatherMessage();
  }, [caster, weather]);

  const isValidData = caster && weather;
  if (!isValidData) return;
  // const { message, setMessage } = useWeatherMessage({ caster, weatherData });

  return (
    <section className="flex items-center justify-center w-96 h-64">
      <div
        onClick={() => setShowWeatherDetail(!showWeatherDetail)}
        className={`flex items-center justify-center w-full h-full rounded-3xl p-6 shadow-lg ${
          showWeatherDetail
            ? "bg-black bg-opacity-70 text-white"
            : "bg-indigo-100"
        } transition-all duration-500 ease-in-out transform`}
      >
        {isLoading && (
          <TextLoader color={`${showWeatherDetail ? "#fff" : "#818cf8"}`} />
        )}
        {!isLoading && !showWeatherDetail && message && (
          <MarkDownViewer content={message} />
        )}
        {weather && !isLoading && showWeatherDetail && (
          <WeatherDetail weather={weather} />
        )}
      </div>
    </section>
  );
}
