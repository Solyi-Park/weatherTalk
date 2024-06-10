import Image from "next/image";

export default function WeatherIcon({ icon }: { icon: string }) {
  return (
    <Image
      src={`https://openweathermap.org/img/wn/${icon}@2x.png
      
      `}
      width={40}
      height={40}
      alt="weather icon"
    />
  );
}
