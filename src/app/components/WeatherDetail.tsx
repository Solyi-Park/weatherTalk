import { WeatherData } from "../service/openai";
import { convertSuntime } from "../utils/time";

import WeatherIcon from "./WeatherIcon";

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
      <p>{description}</p>
      <WeatherIcon icon={icon} size="large" />
      <p>
        최고:
        <span className="ml- font-bold">{temp_max}</span> | 최저:
        <span className="ml-1 font-bold">{temp_min}</span>
      </p>
      <p>
        일출: <span>{convertSuntime(sunrise)}</span> | 일몰:
        <span>{convertSuntime(sunset)}</span>
      </p>
      {precipitation && (
        <p>
          비: <span>{precipitation}</span>mm/h
        </p>
      )}
      {snow && (
        <p>
          눈: <span>{snow}</span>mm/h
        </p>
      )}
      <div className="flex gap-2">
        <p>
          습도:
          <span>{humidity}</span>% |
        </p>
        <p>
          바람:
          <span>{wind}</span>m/s
        </p>
      </div>
    </section>
  );
}
