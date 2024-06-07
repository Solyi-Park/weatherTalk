"use client";
import React, { useEffect, useState } from "react";
import useWeather from "../hooks/weather";
import { useCaster } from "../context/CasterContext";

type Props = {
  lat: number;
  lon: number;
};

export default function WeatherMessage({ lat, lon }: Props) {
  const [message, setMessage] = useState("");
  const { weatherData } = useWeather(lat, lon);
  const { caster } = useCaster();
  useEffect(() => {
    async function fetchWeatherMessage() {
      if (caster && weatherData) {
        try {
          const response = await fetch("/api/weather-message", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ caster, weatherData }),
          });
          const data = await response.json();
          console.log("res 메세지!", data);
          setMessage(data.message);
        } catch (error) {
          console.error("Error fetching weather message:", error);
        }
      }
    }

    fetchWeatherMessage();
  }, [caster, weatherData]);

  const isValidData = caster && weatherData;
  if (!isValidData) return;
  // const { message, setMessage } = useWeatherMessage({ caster, weatherData });

  return <div>{message ? <p>{message}</p> : <p>Generating message...</p>}</div>;
}
