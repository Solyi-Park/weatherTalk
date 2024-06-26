import Image from "next/image";
export type IconSize = "small" | "large";

type Props = {
  icon: string;
  size?: IconSize;
};

export default function WeatherIcon({ icon, size = "small" }: Props) {
  // console.log("icon", icon);
  return (
    <Image
      src={`/api/weather-icon?icon=${icon}`}
      width={getIconSize(size)}
      height={getIconSize(size)}
      alt="weather icon"
      unoptimized={true}
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
