import { WeatherData } from "@/app/service/openai";
import WeatherIcon from "./WeatherIcon";
import { convertSuntime } from "@/app/utils/time";

type Props = {
  weather: WeatherData;
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
  return (
    <section className="text-white flex flex-col items-center">
      <p className="font-bold text-4xl">
        {Math.floor(temp)}
        <span>℃</span>
      </p>
      <div className="flex items-center">
        <p>{description}</p>
        <WeatherIcon icon={icon} size="small" />
      </div>
      <p className="text-lg mb-2">
        최고:
        <span className="ml-2 font-bold">{Math.floor(temp_max)}℃</span> | 최저:
        <span className="ml-2 font-bold">{Math.floor(temp_min)}℃</span>
      </p>
      <p className="text-lg mb-2">
        일출:<span className="ml-2">{convertSuntime(sunrise)}</span> | 일몰:
        <span className="ml-2">{convertSuntime(sunset)}</span>
      </p>
      {precipitation && (
        <p className="text-lg mb-2">
          비:<span className="ml-2">{precipitation}</span>mm/h
        </p>
      )}
      {snow && (
        <p className="text-lg mb-2">
          눈:<span className="ml-2">{snow}</span>mm/h
        </p>
      )}
      <div className="flex gap-2 text-lg mb-2">
        <p>
          습도:
          <span className="ml-2">{humidity}</span>% |
        </p>
        <p>
          바람:
          <span className="ml-2">{wind}</span>m/s
        </p>
      </div>
    </section>
  );
}
