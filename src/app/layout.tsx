import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import QueryProvider from "@/QueryClient";

const sans = Open_Sans({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: {
    template: "%s | WeatherTalk",
    default: "WeatherTalk",
  },
  description: `"weatherTalk"은 날씨 정보를 특별한 캐릭터들의 재미있는 메시지와 함께 제공합니다.`,
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={sans.className}>
      <body>
        <QueryProvider>
          <Header />
          <main className="flex flex-col h-full w-full">{children}</main>
          <div id="portal" />
        </QueryProvider>
      </body>
    </html>
  );
}
