import React, { useState } from "react";
import { useCaster } from "../../context/CasterContext";
import MarkDownViewer from "../MarkDownViewer";
import TextLoader from "../TextLoader";
import WeatherDetail from "./WeatherDetail";
import { useOpenaiMessage } from "../../hooks/message";
import { WeatherData } from "../../service/openai";
import useWeather from "@/app/hooks/weather";
import { LOADINGMESSAGES } from "@/app/constants/message";

export default function OpenaiMessage() {
  const [showWeatherDetail, setShowWeatherDetail] = useState(false);
  const { weather } = useWeather();
  const { caster } = useCaster();
  const { message, isLoading, MessageError } = useOpenaiMessage(
    caster.name,
    weather as WeatherData
  );
  const loadingMessage = LOADINGMESSAGES.find(
    (m) => m.casterName === caster.name
  );
  const loaderColor = showWeatherDetail ? "#fff" : "#818cf8";
  const loadingMessageColor = showWeatherDetail
    ? "text-white"
    : "text-gray-600";

  const handleWeatherDetailToggle = () => {
    setShowWeatherDetail(!showWeatherDetail);
  };

  return (
    <section className="flex items-center justify-center w-full h-1/2 hover:cursor-pointer p-3 min-w-screen-xs">
      <div
        onClick={handleWeatherDetailToggle}
        className={`min-w-screen-xs flex items-center justify-center h-full w-full rounded-3xl shadow-lg overflow-y-auto p-3 sm:p-5 ${
          showWeatherDetail
            ? "bg-black bg-opacity-70 text-white"
            : "bg-indigo-100"
        } transition-all duration-500 ease-in-out transform`}
      >
        {(isLoading || (!isLoading && !message && !showWeatherDetail)) && (
          <div className="flex flex-col items-center gap-5">
            <p
              className={`text-center text-lg italic xs:text-md ${loadingMessageColor}`}
            >
              {loadingMessage?.message}
            </p>
            <TextLoader color={loaderColor} />
          </div>
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
