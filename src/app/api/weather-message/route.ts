import { generateWeatherMessage } from "@/app/service/openai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { caster, weather } = await req.json();
  // console.log("caster", caster, "weather", weather);
  if (!caster || !weather) {
    return NextResponse.json(
      { error: "Caster and weatherData are required" },
      { status: 400 }
    );
  }

  try {
    const res = await generateWeatherMessage(caster, weather);
    return NextResponse.json(res);
  } catch (error) {
    console.error("Error generating text:", error);
    return NextResponse.json(
      { error: "Error generating text" },
      { status: 500 }
    );
  }
}
