"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import axios from "axios";
import { WeatherData } from "../service/openai";
import useLocation from "../hooks/location";

type WeatherContextType = {
  weather: WeatherData | null;
  error: string | null;
};

export const WeatherContext = createContext<WeatherContextType | null>(null);

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const { location } = useLocation();
  const { lat, lon } = location;

  useEffect(() => {
    const fetchWeather = async () => {
      if (lat && lon) {
        try {
          const { data } = await axios.get(
            `/api/weather?lat=${lat}&lon=${lon}`
          );
          if (data) {
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
            setWeather(weatherData);
            setError(null); // 성공적으로 데이터를 가져왔으므로 에러 상태 초기화
          }
        } catch (error) {
          console.error("Error fetching weather data:", error);
          setError("Error fetching weather data");
        }
      }
    };

    fetchWeather();
  }, [lat, lon]); // lat와 lon이 변경될 때마다 fetchWeather를 호출

  return (
    <WeatherContext.Provider value={{ weather, error }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = (): WeatherContextType => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error("useWeatherContext must be used within a WeatherProvider");
  }
  return context;
};
