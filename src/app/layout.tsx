import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { WeatherProvider } from "./context/WeatherContext";

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | WeatherTalk",
    default: "WeatherTalk",
  },
  description: `"weatherTalk"은 날씨 정보를 특별한 캐릭터들의 재미있는 메시지와 함께 제공합니다.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sans.className}>
      <WeatherProvider>
        <body className="p-5 w-full max-w-screen-sm mx-auto">
          <header>
            <Header />
          </header>
          <main>{children}</main>
          <div id="portal" />
        </body>
      </WeatherProvider>
    </html>
  );
}
