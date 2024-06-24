"use client";
import React, { useState } from "react";
import { useCaster } from "../../context/CasterContext";
import MarkDownViewer from "../MarkDownViewer";
import TextLoader from "../TextLoader";
import WeatherDetail from "./WeatherDetail";
import { useWeatherMessage } from "../../hooks/message";
import { WeatherData } from "../../service/openai";
import useWeather from "@/app/hooks/weather";

export default function WeatherMessage() {
  const [showWeatherDetail, setShowWeatherDetail] = useState(false);

  const { weather } = useWeather();
  const { caster } = useCaster();
  const { message, isLoading, error } = useWeatherMessage(
    caster.name,
    weather as WeatherData
  );

  return (
    <section className="flex items-center justify-center w-96 h-72 hover:cursor-pointer">
      <div
        onClick={() => setShowWeatherDetail(!showWeatherDetail)}
        className={`flex items-center justify-center w-full h-full rounded-3xl p-6 shadow-lg ${
          showWeatherDetail
            ? "bg-black bg-opacity-70 text-white"
            : "bg-indigo-100"
        } transition-all duration-500 ease-in-out transform`}
      >
        {isLoading && (
          <TextLoader color={`${showWeatherDetail ? "#fff" : "#818cf8"}`} />
        )}
        {!isLoading && !showWeatherDetail && message && (
          <MarkDownViewer content={message} />
        )}
        {!isLoading && showWeatherDetail && weather && (
          <WeatherDetail weather={weather} />
        )}
      </div>
    </section>
  );
}
