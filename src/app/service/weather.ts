import axios from "axios";
import { WeatherData } from "./openai";

export async function getCurrentWeather(lat: number, lon: number) {
  const APIKEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&lang=kr&units=metric`;
  const res = await axios.get(url);

  const data = res.data;

  const weatherData: WeatherData = {
    description: data.weather[0].description,
    temp: data.main.temp,
    temp_max: data.main.temp_max,
    temp_min: data.main.temp_min,
    precipitation: data.rain ? data.rain["1h"] : null,
    wind: data.wind.speed,
    snow: data.snow ? data.snow["1h"] : null,
    humidity: data.main.humidity,
    sunrise: data.sys.sunrise,
    sunset: data.sys.sunset,
    icon: data.weather[0].icon,
  };
  return weatherData;
}
