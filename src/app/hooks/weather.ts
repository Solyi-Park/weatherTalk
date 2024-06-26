import { useEffect, useState } from "react";
import { WeatherData } from "../service/openai";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import useLocation from "./location";

export default function useWeather() {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  const { lat, lon } = useLocation();

  const { data, isLoading, error } = useQuery({
    queryKey: ["weather", lat, lon],
    queryFn: fetcher,
    enabled: !!lat && !!lon,
  });
  useEffect(() => {
    if (data) {
      setWeather(data);
    }
  }, [data]);

  async function fetcher() {
    if (lat && lon) {
      try {
        const data = await axios
          .get(`/api/weather?lat=${lat}&lon=${lon}`)
          .then((res) => {
            const data = res.data;
            const weatherData: WeatherData = {
              description: data.description,
              temp: data.temp,
              temp_max: data.temp_max,
              temp_min: data.temp_min,
              precipitation: data.precipitation,
              wind: data.wind,
              snow: data.snow,
              humidity: data.humidity,
              sunrise: data.sunrise,
              sunset: data.sunset,
              icon: data.icon,
            };
            return weatherData;
          });
        return data;
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }
  }

  return {
    weather,
    isWeatherLoading: isLoading,
    error,
  };
}
