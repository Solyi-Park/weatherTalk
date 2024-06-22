"use client";
import QueryProvider from "@/QueryClient";
import WeatherMessage from "./components/weather/WeatherMessage";
import { CasterProvider } from "./context/CasterContext";
import CasterAvatar from "./components/caster/CasterAvatar";

export default function Home() {
  return (
    <div className="flex flex-col items-center mx-auto  ">
      <CasterProvider>
        <QueryProvider>
          <WeatherMessage />
        </QueryProvider>
        <CasterAvatar />
      </CasterProvider>
    </div>
  );
}
