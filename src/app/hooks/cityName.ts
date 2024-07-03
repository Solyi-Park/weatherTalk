import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useLocation from "./location";

async function fetchCityname(lat: number, lon: number): Promise<string> {
  if (lat === undefined || lon === undefined)
    throw new Error("Invalid location");
  try {
    const { data } = await axios.get(`/api/cityname?lat=${lat}&lon=${lon}`);
    return data.cityname;
  } catch (error) {
    console.error("Error fetching cityname", error);
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

    queryFn: () => fetchCityname(lat!, lon!),
    enabled: !!lat && !!lon,
  });

  return {
    cityname,
    isCitynameLoading,
    citynameError,
  };
}
