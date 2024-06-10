import React, { useEffect, useState } from "react";

import { useCaster } from "../context/CasterContext";
import { useWeather } from "../context/WeatherContext";
import MarkDownViewer from "./MarkDownViewer";

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
    <>
      <div className="flex w-96 items-center justify-center bg-indigo-100 rounded-3xl p-6 h-72">
        {isLoading && <p>Generating message...</p>}
        {!isLoading && message && <MarkDownViewer content={message} />}
      </div>
    </>
  );
}
