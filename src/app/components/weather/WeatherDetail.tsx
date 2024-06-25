import { WeatherData } from "@/app/service/openai";
import WeatherIcon from "./WeatherIcon";
import { convertSuntime } from "@/app/utils/time";

type Props = {
  weather: WeatherData;
};
type WeatherDetailType = {
  label: string;
  data: number | string | null;
  unit?: string;
  style?: string;
};

export default function WeatherDetail({ weather }: Props) {
  const {
    description,
    temp,
    temp_max,
    temp_min,
    precipitation,
    wind,
    snow,
    humidity,
    sunrise,
    sunset,
    icon,
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
  const filteredDetail = WEATHERDETAIL.filter((item) => item.data !== null);

  return (
    <section className="text-white flex flex-col items-center leading-7">
      <p className="font-bold text-4xl">
        {Math.floor(temp)}
        <span>℃</span>
      </p>
      <div className="flex items-center">
        <p>{description}</p>
        <WeatherIcon icon={icon} size="small" />
      </div>
      <ul className="grid grid-cols-2 gap-x-7">
        {filteredDetail.map((item) => (
          <li key={item.label}>
            <p className={`${item.style} text-lg mb-1`}>
              {item.label}: {item.data}
              {item.unit}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
