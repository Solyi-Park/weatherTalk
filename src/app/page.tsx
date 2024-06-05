"use client";
import { useState } from "react";
import CasterAvatar from "./components/CasterAvatar";
import WeatherMessage from "./components/WeatherMessage";
import useLocation from "./hooks/location";
import { Caster } from "./service/openai";

export default function Home() {
  const [caster, setCaster] = useState<Caster>("이장님");
  const { lat, lon } = useLocation();
  return (
    <>
      <WeatherMessage caster={caster} lat={lat} lon={lon} />
      <CasterAvatar />
    </>
  );
}
