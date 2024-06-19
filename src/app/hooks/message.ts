import useSWR from "swr";
import axios from "axios";
import { Caster, WeatherData } from "../service/openai";

type Props = {
  caster: Caster;
  weather: WeatherData;
};

const fetcher = async (url: string, { caster, weather }: Props) => {
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
  const { data, error, isLoading } = useSWR(
    ["/api/weather-message", caster && weather && { caster, weather }],
    ([url, props]) => fetcher(url, props)
  );

  return {
    message: data,
    isLoading,
    error,
  };
}
