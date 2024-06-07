"use client";
import Temperature from "./Temperature";
import useLocation from "../hooks/location";
import Link from "next/link";

export default function Header() {
  const { location, cityName } = useLocation();
  const { lat, lon } = location;

  return (
    <div className="flex items-center justify-between py-3">
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
