import { useEffect, useState } from "react";

export type Location = {
  lat: number | null;
  lon: number | null;
};

export default function useLocation() {
  const [location, setlocation] = useState<Location>({
    lat: null,
    lon: null,
  });
  const [locationError, setlocationError] = useState<string | null>(null);

  useEffect(() => {
    const { geolocation } = navigator;
    if (geolocation) {
      geolocation.getCurrentPosition(onGeoOk, onGeoError);
    } else {
      console.log("Geolocation is not supported");
      setlocationError("Geolocation is not supported");
    }
  }, []);

  const onGeoOk = (position: GeolocationPosition) => {
    const newLocation = {
      lat: position.coords.latitude,
      lon: position.coords.longitude,
    };
    setlocation(newLocation);
  };

  const onGeoError = (error: GeolocationPositionError) =>
    console.log(error, "Unable to retrieve your location");

  return { lat: location.lat, lon: location.lon, locationError };
}
