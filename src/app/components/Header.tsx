import Link from "next/link";
import HeaderInfo from "./HeaderInfo";

export default function Header() {
  return (
    <header className="w-full h-14 px-2 py-2 flex items-center justify-between min-w-screen-xs">
      <Link href="/" aria-label="Home">
        <h1 className="xs:text-xl sm:text-2xl font-bold text-3xl">
          WeatherTalk
        </h1>
      </Link>
      <HeaderInfo />
    </header>
  );
}
