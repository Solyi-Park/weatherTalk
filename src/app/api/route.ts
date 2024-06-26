import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;
  const icon = params.get("icon");

  if (!icon) {
    return new NextResponse("Bad Request", { status: 400 });
  }

  const url = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  try {
    const res = await axios.get(url, { responseType: "arraybuffer" });
    if (res.data) {
      return new NextResponse(res.data, {
        headers: {
          "Content-Type": "image/png",
        },
      });
    } else {
      return new NextResponse(
        JSON.stringify({ message: "Weather icon not found" }),
        { status: 404 }
      );
    }
  } catch (error) {
    console.error(error, "Error fetching weather icon");
    return new NextResponse(
      JSON.stringify({ message: "Error fetching weather icon" }),
      { status: 500 }
    );
  }
}
