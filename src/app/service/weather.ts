import axios from "axios";

export async function getCurrentWeather(lat: number, lon: number) {
  const APIKEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&lang=kr&units=metric`;
  const res = await axios.get(url);
  return res.data;
}
