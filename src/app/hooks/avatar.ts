"use client";
import { useCasterStore } from "../store/caster";

export default function useAvatar() {
  const { caster, selectRandomCaster } = useCasterStore();

  return { caster, selectRandomCaster };
}
