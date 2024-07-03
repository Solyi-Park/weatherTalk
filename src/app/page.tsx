"use client";
import QueryProvider from "@/QueryClient";
import OpenaiMessage from "./components/weather/OpenaiMessage";
import { CasterProvider } from "./context/CasterContext";
import CasterAvatar from "./components/caster/CasterAvatar";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function Home() {
  return (
    <div className="flex flex-col h-full p-3">
      <QueryProvider>
        <CasterProvider>
          <OpenaiMessage />
          <CasterAvatar />
        </CasterProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryProvider>
    </div>
  );
}
