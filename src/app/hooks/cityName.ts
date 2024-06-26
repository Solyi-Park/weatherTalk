import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useLocation from "./location";

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

export default function useCityName() {
  const { lat, lon } = useLocation();

  const {
    data: cityName,
    isLoading: isCityNameLoading,
    error: cityNameError,
  } = useQuery({
    queryKey: ["cityName", lat, lon],
    queryFn: () => (location ? fetchCityName(lat!, lon!) : null),
    enabled: !!lat && !!lon,
  });

  return {
    cityName,
    isCityNameLoading,
    cityNameError,
  };
}
