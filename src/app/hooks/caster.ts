"use client";
import { useEffect, useState } from "react";
import { useCaster } from "../context/CasterContext";
import { CasterDetail, FULLCASTERS } from "../data/casters";
import { CASTER_KEY } from "../components/caster/CasterOptions";

export default function useAvatar() {
  const { caster, setCaster } = useCaster();
  const [currentCaster, setCurrentCaster] = useState<CasterDetail | null>(null);

  const selectRandomCaster = () => {
    const randomIndex = Math.floor(Math.random() * FULLCASTERS.length);
    const randomCaster = FULLCASTERS[randomIndex];
    setCurrentCaster(randomCaster);
    setCaster(randomCaster.name);
    localStorage.setItem(CASTER_KEY, randomCaster.name);
  };

  useEffect(() => {
    const savedCaster = localStorage.getItem(CASTER_KEY);
    if (savedCaster) {
      const foundCaster = FULLCASTERS.find((c) => c.name === savedCaster);
      if (foundCaster) {
        setCurrentCaster(foundCaster);
        setCaster(foundCaster.name);
      }
    } else {
      selectRandomCaster();
    }
  }, [caster]);

  return { caster, currentCaster, selectRandomCaster };
}
