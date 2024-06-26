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
    const buffer = Buffer.from(res.data, "binary");
    return new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Type": "image/png",
      },
    });
  } catch (error) {
    console.error(error, "Error fetching weather icon");
    return NextResponse.json(
      { message: "Error fetching weather icon" },
      { status: 500 }
    );
  }
}
