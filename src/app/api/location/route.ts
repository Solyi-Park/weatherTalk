import { NextRequest, NextResponse } from "next/server";
import { getLocation } from "../../service/location";

export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;
  const lat = parseFloat(params.get("lat") || "");
  const lon = parseFloat(params.get("lon") || "");

  if (!lat || !lon) {
    return new NextResponse("Bad Request", { status: 400 });
  }

  try {
    const data = await getLocation(lat, lon);

    if (data && data.length > 0) {
      return NextResponse.json({ cityName: data[0].local_names.ko });
    } else {
      return NextResponse.json(
        { message: "Location not found" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Error fetching location data:", error);
    return NextResponse.json(
      { message: "Error fetching location data" },
      { status: 500 }
    );
  }
}
