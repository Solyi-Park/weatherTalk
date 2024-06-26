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

export function useOpenaiMessage(caster: Caster, weather: WeatherData) {
  const fetchOpenaiMessage = async () => {
    return fetcher("/api/generate-weather-message", { caster, weather });
  };
  const { data, error, isLoading } = useQuery<string>({
    queryKey: ["message", caster, weather],
    queryFn: fetchOpenaiMessage,
    enabled: !!caster && !!weather,
  });

  return {
    message: data,
    isLoading,
    MessageError: error,
  };
}
