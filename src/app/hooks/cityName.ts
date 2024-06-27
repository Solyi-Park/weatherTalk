import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useLocation from "./location";

async function fetchCityname(lat: number, lon: number): Promise<string> {
  if (lat === null || lon === null) throw new Error("Invalid location");
  try {
    const { data } = await axios.get(`/api/cityname?lat=${lat}&lon=${lon}`);
    return data.cityname;
  } catch (error) {
    console.log("Error fetching cityname");
    throw new Error("Error fetching cityname");
  }
}

export default function useCityname() {
  const { lat, lon } = useLocation();

  const {
    data: cityname,
    isLoading: isCitynameLoading,
    error: citynameError,
  } = useQuery({
    queryKey: ["cityname", lat, lon],
    queryFn: () => (location ? fetchCityname(lat!, lon!) : null),
    enabled: !!lat && !!lon,
  });

  return {
    cityname,
    isCitynameLoading,
    citynameError,
  };
}
