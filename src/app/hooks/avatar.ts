"use client";
import { useEffect, useCallback } from "react";
import { useCaster } from "../context/CasterContext";
import { FULLCASTERS } from "../data/casters";
import { CASTER_KEY } from "../components/caster/CasterOptions";

export default function useAvatar() {
  const { caster, setCaster } = useCaster();

  const selectRandomCaster = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * FULLCASTERS.length);
    const randomCaster = FULLCASTERS[randomIndex];

    setCaster(randomCaster);
    localStorage.setItem(CASTER_KEY, randomCaster.name);
  }, [setCaster]);

  useEffect(() => {
    const savedCaster = localStorage.getItem(CASTER_KEY);
    if (savedCaster) {
      const foundCaster = FULLCASTERS.find((c) => c.name === savedCaster);
      if (foundCaster) {
        setCaster(foundCaster);
      }
    } else {
      selectRandomCaster();
    }
  }, [selectRandomCaster, setCaster]);

  return { caster, selectRandomCaster };
}
