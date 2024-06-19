import axios from "axios";
import { useEffect, useState } from "react";

type Location = {
  lat: number;
  lon: number;
};
export default function useLocation() {
  const [location, setLocation] = useState<Location>({
    lat: 37.566535,
    lon: 126.9779692,
  });
  const [cityName, setCityName] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setGeoError] = useState<string | null>(null);

  const geolocation = navigator.geolocation;

  useEffect(() => {
    if (geolocation) {
      geolocation.getCurrentPosition(onGeoOk, onGeoError);
    } else {
      console.log("Geolocation is not supported by your browser");
      setGeoError("Geolocation is not supported by your browser");
    }
  }, [geolocation]);

  const onGeoOk = (position: GeolocationPosition) => {
    const newLocation = {
      lat: position.coords.latitude,
      lon: position.coords.longitude,
    };
    setLocation(newLocation);
    fetchCityName(newLocation.lat, newLocation.lon);
  };
  const onGeoError = (error: GeolocationPositionError) =>
    console.log(error, "Unable to retrieve your location");

  const fetchCityName = async (lat: number, lon: number) => {
    if (lat && lon) {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/api/location?lat=${lat}&lon=${lon}`);
        setCityName(data.cityName);
        setIsLoading(false);
      } catch (error) {
        console.log("Error fetching location");
      }
    }
  };

  return { location, cityName, isLoading, error };
}
