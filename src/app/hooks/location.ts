import axios from "axios";
import { useEffect, useState } from "react";

export default function useLocation() {
  const [location, setLocation] = useState({
    lat: 37.541,
    lon: 126.986,
  });
  const [cityName, setCityName] = useState("");
  const [error, setError] = useState("");
  const { lat, lon } = location;

  useEffect(() => {
    const geolocation = navigator.geolocation;

    if (geolocation) {
      geolocation.getCurrentPosition(
        (position) => {
          const newLocation = {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          };
          setLocation(newLocation);
          fetchCityName(lat, lon);
        },
        (error) => console.log(error, "Unable to retrieve your location")
      );
    } else {
      console.log("Geolocation is not supported by your browser");
      setError("Geolocation is not supported by your browser");
    }

    const fetchCityName = async (lat: number, lon: number) => {
      try {
        const { data } = await axios.get(`/api/location?lat=${lat}&lon=${lon}`);
        setCityName(data.cityName);
      } catch (error) {
        console.log("Error fetching location");
      }
    };
  }, []);

  return { location, cityName, error };
}
