"use client";
import CasterAvatar from "./components/CasterAvatar";
import WeatherMessage from "./components/WeatherMessage";
import useLocation from "./hooks/location";
import { CasterProvider } from "./context/CasterContext";

export default function Home() {
  const { location } = useLocation();
  const { lat, lon } = location;
  return (
    <>
      <CasterProvider>
        <WeatherMessage lat={lat} lon={lon} />
        <CasterAvatar />
      </CasterProvider>
    </>
  );
}
