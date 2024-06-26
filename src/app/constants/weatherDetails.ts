import { WeatherData } from "../service/openai";
import { convertSuntime } from "../utils/time";

type WeatherDetailType = {
  label: string;
  data: number | string | null;
  unit?: string;
  style?: string;
};

export const getWeatherDetail = (weather: WeatherData) => {
  const {
    temp_max,
    temp_min,
    sunrise,
    sunset,
    precipitation,
    snow,
    humidity,
    wind,
  } = weather;
  const WEATHERDETAIL: WeatherDetailType[] = [
    {
      label: "최고",
      data: Math.round(temp_max),
      unit: "℃",
      style: "text-red-400",
    },
    {
      label: "최저",
      data: Math.round(temp_min),
      unit: "℃",
      style: "text-blue-400",
    },
    {
      label: "일출",
      data: convertSuntime(sunrise),
    },
    {
      label: "일몰",
      data: convertSuntime(sunset),
    },
    {
      label: "비",
      data: precipitation,
      unit: "mm/h",
    },
    {
      label: "눈",
      data: snow,
      unit: "mm/h",
    },
    {
      label: "습도",
      data: humidity,
      unit: "%",
    },
    {
      label: "바람",
      data: wind,
      unit: " m/s",
    },
  ];
  return WEATHERDETAIL;
};
