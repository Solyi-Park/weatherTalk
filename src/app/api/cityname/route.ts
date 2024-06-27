import { NextRequest, NextResponse } from "next/server";
import { getCityname } from "../../service/city";

export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;
  const lat = parseFloat(params.get("lat") || "");
  const lon = parseFloat(params.get("lon") || "");

  if (!lat || !lon) {
    return new NextResponse("Bad Request", { status: 400 });
  }

  try {
    const data = await getCityname(lat, lon);

    if (data && data.length > 0) {
      return NextResponse.json({ cityname: data[0].local_names.ko });
    } else {
      return NextResponse.json(
        { message: "cityname not found" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Error fetching cityname data:", error);
    return NextResponse.json(
      { message: "Error fetching cityname data" },
      { status: 500 }
    );
  }
}
