import axios from "axios";
import { Caster, WeatherData } from "../service/openai";
import { useQuery } from "@tanstack/react-query";

type Props = {
  caster: Caster;
  weather: WeatherData;
};

export const fetcher = async (url: string, { caster, weather }: Props) => {
  const response = await axios.post(
    url,
    { caster, weather },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data.message;
};

export function useWeatherMessage(caster: Caster, weather: WeatherData) {
  const fetchWeatherMessage = async () => {
    return fetcher("/api/weather-message", { caster, weather });
  };
  const { data, error, isLoading } = useQuery<string>({
    queryKey: ["message", caster, weather],
    queryFn: fetchWeatherMessage,
    enabled: !!caster && !!weather,
  });

  return {
    message: data,
    isLoading,
    error,
  };
}
