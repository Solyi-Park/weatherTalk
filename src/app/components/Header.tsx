"use client";
import Temperature from "./Temperature";
import { useEffect, useState } from "react";
import useLocation from "../hooks/location";
import Link from "next/link";
import axios from "axios";

export default function Header() {
  const { lat, lon } = useLocation();
  const [cityName, setCityName] = useState("");
  useEffect(() => {
    if (lat && lon) {
      const fetchLocation = async (lat: number, lon: number) => {
        const { data } = await axios.get(`/api/location?lat=${lat}&lon=${lon}`);

        if (data) {
          setCityName(data.cityName);
        }
      };
      fetchLocation(lat, lon);
    }
  }, []);

  return (
    <div className="flex items-center justify-between ">
      <Link href="/" aria-label="Home">
        <h1 className="font-bold text-3xl">WeatherTalk</h1>
      </Link>
      <div className="flex gap-2">
        <p className="text-lg">{cityName || "--"}</p>
        <Temperature lat={lat} lon={lon} />
      </div>
    </div>
  );
}
