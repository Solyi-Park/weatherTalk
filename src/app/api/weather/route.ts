import { NextRequest, NextResponse } from "next/server";
import { getCurrentWeather } from "@/app/service/weather";

export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;
  const lat = parseFloat(params.get("lat") || "");
  const lon = parseFloat(params.get("lon") || "");

  if (!lat || !lon) {
    return new NextResponse("Bad Request", { status: 400 });
  }

  try {
    const data = await getCurrentWeather(lat, lon);

    if (data) {
      return NextResponse.json(data);
    } else {
      return NextResponse.json(
        { message: "Weather not found" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Error fetching Weather data:", error);
    return NextResponse.json(
      { message: "Error fetching Weather data" },
      { status: 500 }
    );
  }
}
