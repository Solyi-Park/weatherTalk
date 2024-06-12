"use client";
import React, { useEffect, useState } from "react";
import { useCaster } from "../context/CasterContext";
import { useWeather } from "../context/WeatherContext";
import MarkDownViewer from "./MarkDownViewer";
import TextLoader from "./TextLoader";

export default function WeatherMessage() {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
      <div className="flex items-center justify-center w-full h-full bg-indigo-100 rounded-3xl p-6 shadow-lg">
        {isLoading && <TextLoader />}
        {!isLoading && message && <MarkDownViewer content={message} />}
      </div>
    </section>
  );
}
