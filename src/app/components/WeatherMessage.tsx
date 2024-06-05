"use client";
import React, { useEffect, useState } from "react";
import { Caster, WeatherData } from "../service/openai";

type Props = {
  caster: Caster;
  lat: number;
  lon: number;
};

export default function WeatherMessage({ caster, lat, lon }: Props) {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    if (lat && lon) {
      const fetchWeather = async (lat: number, lon: number) => {
        try {
          const response = await fetch(`/api/weather?lat=${lat}&lon=${lon}`);
          const data = await response.json();
          if (data) {
            setWeatherData({
              description: data.weather[0].description,
              temp: data.main.temp,
              temp_max: data.main.temp_max,
              temp_min: data.main.temp_min,
              precipitation: data.rain ? data.rain["1h"] : 0,
              wind: data.wind.speed,
              humidity: data.main.humidity,
            });
          }
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
      };
      fetchWeather(lat, lon);
    }
  }, [lat, lon]);

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

  return (
    <div>
      <h2>Weather Message</h2>
      {message ? <p>{message}</p> : <p>Generating message...</p>}
    </div>
  );
}
