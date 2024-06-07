import axios from "axios";
import { useState, useEffect } from "react";
import { WeatherData } from "../service/openai";

export default function useWeather(lat: number, lon: number) {
  const [temp, setTemp] = useState<number | null>(null);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const isValidLocation = lat && lon;

  useEffect(() => {
    const fetchWeather = async (lat: number, lon: number) => {
      try {
        const { data } = await axios.get(`/api/weather?lat=${lat}&lon=${lon}`);
        setTemp(data.main.temp);
        setWeatherData({
          description: data.weather[0].description,
          temp: data.main.temp,
          temp_max: data.main.temp_max,
          temp_min: data.main.temp_min,
          precipitation: data.rain ? data.rain["1h"] : 0,
          wind: data.wind.speed,
          humidity: data.main.humidity,
        });
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setError("Error fetching weather data");
      }
    };

    if (isValidLocation) {
      fetchWeather(lat, lon);
    }
  }, []);

  return { temp, weatherData, error };
}
