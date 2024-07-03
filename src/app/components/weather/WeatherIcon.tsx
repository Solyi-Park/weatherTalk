import Image from "next/image";

export type IconSize = "small" | "large";

type Props = {
  icon: string;
  size?: IconSize;
};

export default function WeatherIcon({ icon, size = "small" }: Props) {
  return (
    <Image
      src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
      width={getIconSize(size)}
      height={getIconSize(size)}
      alt="weather icon"
    />
  );
}
function getIconSize(size: IconSize) {
  switch (size) {
    case "small":
      return 40;
    case "large":
      return 60;
    default:
      40;
  }
}
