import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | WeatherTalk",
    default: "WeatherTalk",
  },
  description: `"weatherTalk"은 날씨 정보를 특별한 캐릭터들의 재미있는 메시지와 함께 제공하는 웹사이트입니다. 
  우울한 날씨조차도 즐겁게 바꿔드리는 우리의 캐릭터들이, 날씨에 따라 다른 말투로 사용자에게 날씨 정보를 전달합니다. 
  선택한 캐릭터의 말투와 누군가가 말해주는 듯한 메시지를 통해, 날씨 정보를 확인하는 과정이 더욱 흥미롭고 즐거워집니다. 
  지루한 일상에 새로운 유쾌한 경험을 더하고 싶다면, "weatherTalk"을 방문해보세요!`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sans.className}>
      <body className="p-5 w-full max-w-screen-sm mx-auto">
        <header>
          <Header />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
