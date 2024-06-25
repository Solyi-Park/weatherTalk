import { useQuery } from "@tanstack/react-query";
import axios from "axios";
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
  const [geolocationError, setGeolocationError] = useState<string | null>(null);

  const {
    data: cityName,
    isLoading: isCityNameLoading,
    error: cityNameError,
  } = useQuery({
    queryKey: ["cityName", location.lat, location.lon],
    queryFn: () =>
      location ? fetchCityName(location.lat!, location.lon!) : null,
    enabled: !!location.lat && !!location.lon,
  });

  useEffect(() => {
    const { geolocation } = navigator;
    if (geolocation) {
      geolocation.getCurrentPosition(onGeoOk, onGeoError);
    } else {
      console.log("Geolocation is not supported");
      setGeolocationError("Geolocation is not supported");
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

  async function fetchCityName(lat: number, lon: number): Promise<string> {
    if (lat === null || lon === null) throw new Error("Invalid location");
    try {
      const { data } = await axios.get(`/api/location?lat=${lat}&lon=${lon}`);
      return data.cityName;
    } catch (error) {
      console.log("Error fetching location");
      throw new Error("Error fetching location");
    }
  }

  return {
    location,
    cityName,
    isCityNameLoading,
    cityNameError,
    geolocationError,
  };
}
