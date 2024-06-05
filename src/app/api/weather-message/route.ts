import { generateWeatherMessage } from "@/app/service/openai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { caster, weatherData } = await req.json();

  if (!caster || !weatherData) {
    return NextResponse.json(
      { error: "Caster and weatherData are required" },
      { status: 400 }
    );
  }

  try {
    const message = await generateWeatherMessage(caster, weatherData);
    return NextResponse.json({ message });
  } catch (error) {
    console.error("Error generating text:", error);
    return NextResponse.json(
      { error: "Error generating text" },
      { status: 500 }
    );
  }
}
