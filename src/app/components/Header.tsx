import Link from "next/link";
import HeaderInfo from "./HeaderInfo";

export default function Header() {
  return (
    <header className="w-full h-14 px-2 py-3 flex items-center justify-between">
      <Link href="/" aria-label="Home">
        <h1 className="font-bold text-3xl">WeatherTalk</h1>
      </Link>
      <HeaderInfo />
    </header>
  );
}
