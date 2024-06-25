"use client";
import QueryProvider from "@/QueryClient";
import WeatherMessage from "./components/weather/WeatherMessage";
import { CasterProvider } from "./context/CasterContext";
import CasterAvatar from "./components/caster/CasterAvatar";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function Home() {
  return (
    <div className="flex flex-col items-center mx-auto p-2">
      <QueryProvider>
        <CasterProvider>
          <WeatherMessage />
          <CasterAvatar />
        </CasterProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryProvider>
    </div>
  );
}
