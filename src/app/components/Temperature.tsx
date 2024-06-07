import useWeather from "../hooks/weather";

type Props = {
  lat: number;
  lon: number;
};
export default function Temperature({ lat, lon }: Props) {
  const { temp } = useWeather(lat, lon);
  return (
    <p className="text-lg">
      <span className="font-bold">{temp || "--"}</span> ℃
    </p>
  );
}
