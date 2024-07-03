import axios from "axios";

export async function getCityname(lat: number, lon: number) {
  const APIKEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  const url = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${APIKEY}`;
  const res = await axios.get(url);
  return res.data;
}
