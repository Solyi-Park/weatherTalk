import React, { useState } from "react";
import { useCaster } from "../../context/CasterContext";
import MarkDownViewer from "../MarkDownViewer";
import TextLoader from "../TextLoader";
import WeatherDetail from "./WeatherDetail";
import { useWeatherMessage } from "../../hooks/message";
import { WeatherData } from "../../service/openai";
import useWeather from "@/app/hooks/weather";

const casterLoadingMessages = [
  {
    casterName: "이장님",
    message:
      "가만있어 보자.. 오늘 날씨가 어찌 되는지 알아보는 중이여. 잠깐만 기다려주게.",
  },
  {
    casterName: "할머니",
    message: "아이구, 잠깐만 기다리셔. 날씨를 알아보는 중이여.",
  },
  {
    casterName: "엄마",
    message: "조금만 기다려보렴! 날씨 정보를 가져오고 있어.",
  },
  {
    casterName: "여자캐스터",
    message: "잠시만 기다려주세요! 날씨 정보를 열심히 가져오고 있어요.",
  },
  {
    casterName: "남자캐스터",
    message: "잠시만 기다려주십시오. 날씨 정보를 가져오는 중입니다.",
  },
  {
    casterName: "KPOP매니아",
    message: "잠시만 기다려줘! 날씨 정보를 확인 중이야, 금방 알려줄게!",
  },
  {
    casterName: "먹방유튜버",
    message:
      "잠시만 기다려줘, 날씨정보를 가져오고 있어. 기다리는 동안 오늘 뭘 먹을지 생각해볼까?",
  },
  {
    casterName: "패션인플루언서1",
    message:
      "잠깐만 기다려줘! 날씨 정보를 곧 가져올게. 그동안 스타일링 팁을 생각해볼게!",
  },
  {
    casterName: "패션인플루언서2",
    message:
      "조금만 기다려줘! 날씨 정보를 곧 가져올게. 그동안 멋진 코디를 생각해볼게!",
  },
];

export default function WeatherMessage() {
  const [showWeatherDetail, setShowWeatherDetail] = useState(false);
  const { weather } = useWeather();
  const { caster } = useCaster();
  const { message, isLoading, error } = useWeatherMessage(
    caster.name,
    weather as WeatherData
  );
  const loadingMessage = casterLoadingMessages.find(
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
    <section className="flex items-center justify-center w-96 h-72 hover:cursor-pointer">
      <div
        onClick={handleWeatherDetailToggle}
        className={`flex items-center justify-center w-full h-full rounded-3xl p-6 shadow-lg ${
          showWeatherDetail
            ? "bg-black bg-opacity-70 text-white"
            : "bg-indigo-100"
        } transition-all duration-500 ease-in-out transform`}
      >
        {(isLoading || (!isLoading && !message && !showWeatherDetail)) && (
          <div className="flex flex-col items-center gap-5">
            <p className={`text-center text-lg italic ${loadingMessageColor}`}>
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
