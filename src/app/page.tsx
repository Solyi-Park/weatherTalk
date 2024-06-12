"use client";
import CasterAvatar from "./components/CasterAvatar";
import WeatherMessage from "./components/WeatherMessage";
import { CasterProvider } from "./context/CasterContext";

export default function Home() {
  return (
    <div className="flex flex-col items-center mx-auto  ">
      <CasterProvider>
        <WeatherMessage />
        <CasterAvatar />
      </CasterProvider>
    </div>
  );
}
