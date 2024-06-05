import { useEffect, useState } from "react";

export default function useLocation() {
  const [location, setLocation] = useState({
    lat: 37.541,
    lon: 126.986,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation(() => ({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        }));
      });
    } else {
      console.log("위치정보를 가져올 수 없습니다.");
    }
  }, []);
  return location;
}
