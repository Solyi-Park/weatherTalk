import Link from "next/link";
import HeaderInfo from "./HeaderInfo";

export default function Header() {
  return (
    <div className="flex items-center justify-between py-3 ">
      <Link href="/" aria-label="Home">
        <h1 className="font-bold text-3xl">WeatherTalk</h1>
      </Link>
      <HeaderInfo />
    </div>
  );
}
