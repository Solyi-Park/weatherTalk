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
    <section className="text-white flex flex-col items-center w-full leading-7">
      <p className="font-bold text-4xl xs:text-2xl">
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
            <p className={`${item.style} xs:text-sm text-md mb-1`}>
              {item.label}: {item.data}
              {item.unit}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
