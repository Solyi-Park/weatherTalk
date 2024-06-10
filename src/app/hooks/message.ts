import useSWR from "swr";
import { WeatherData } from "../service/openai";
import axios from "axios";
import { useState } from "react";
type Props = {
  caster: string;
  weatherData: WeatherData;
};

const fetcher = async (url: string, { caster, weatherData }: Props) => {
  return await axios
    .post(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: { caster, weatherData },
    })
    .then((res) => res.data);
};

export async function useWeatherMessage({ caster, weatherData }: Props) {
  const [message, setMessage] = useState("");
  const { data, isLoading, error } = useSWR("/api/weather-message", (url) =>
    fetcher(url, { caster, weatherData })
  );
  if (!data) return;
  setMessage(data);

  return { message, setMessage, isLoading, error };
}
