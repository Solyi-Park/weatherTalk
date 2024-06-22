import { WeatherData } from "@/app/service/openai";
import WeatherIcon from "./WeatherIcon";
import { convertSuntime } from "@/app/utils/time";

type Props = {
  weather: WeatherData;
};
const SPANSTYLE = "ml-2";

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
    <section className="text-white flex flex-col items-center leading-7">
      <p className="font-bold text-4xl">
        {Math.floor(temp)}
        <span>℃</span>
      </p>
      <div className="flex items-center">
        <p>{description}</p>
        <WeatherIcon icon={icon} size="small" />
      </div>
      <p>
        최고:
        <span className={SPANSTYLE}>{Math.floor(temp_max)}℃</span> | 최저:
        <span className={SPANSTYLE}>{Math.floor(temp_min)}℃</span>
      </p>
      <p>
        일출:<span className={SPANSTYLE}>{convertSuntime(sunrise)}</span> |
        일몰:
        <span className={SPANSTYLE}>{convertSuntime(sunset)}</span>
      </p>
      {precipitation && (
        <p>
          비:<span className={SPANSTYLE}>{precipitation}</span>mm/h
        </p>
      )}
      {snow && (
        <p>
          눈:<span className={SPANSTYLE}>{snow}</span>mm/h
        </p>
      )}
      <div className="flex gap-2 mb-2">
        <p>
          습도:
          <span className={SPANSTYLE}>{humidity}</span>% |
        </p>
        <p>
          바람:
          <span className={SPANSTYLE}>{wind}</span>m/s
        </p>
      </div>
    </section>
  );
}
