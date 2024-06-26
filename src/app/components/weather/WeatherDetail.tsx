import { WeatherData } from "@/app/service/openai";
import WeatherIcon from "./WeatherIcon";
import { getWeatherDetail } from "@/app/constants/weatherDetails";

type Props = {
  weather: WeatherData;
};

export default function WeatherDetail({ weather }: Props) {
  const { temp, description, icon } = weather;

  const WEATHERDETAIL = getWeatherDetail(weather);

  const filteredDetail = WEATHERDETAIL.filter((item) => item.data !== null);

  return (
    <section className="text-white flex flex-col items-center leading-7">
      <p className="font-bold text-4xl">
        {Math.round(temp)}
        <span>℃</span>
      </p>
      <div className="flex items-center">
        <p>{description}</p>
        <WeatherIcon icon={icon} size="large" />
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
