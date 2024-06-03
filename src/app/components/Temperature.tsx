import axios from "axios";
import { useEffect, useState } from "react";

type Props = {
  lat: number;
  lon: number;
};
export default function Temperature({ lat, lon }: Props) {
  const [temp, setTemp] = useState(null);
  useEffect(() => {
    if (lat && lon) {
      const fetchWeather = async (lat: number, lon: number) => {
        const { data } = await axios.get(`/api/weather?lat=${lat}&lon=${lon}`);
        if (data) {
          setTemp(data.main.temp);
        }
      };
      fetchWeather(lat, lon);
    }
  }, []);
  return (
    <p className="text-lg">
      <span className="font-bold">{temp || "--"}</span> ℃
    </p>
  );
}
