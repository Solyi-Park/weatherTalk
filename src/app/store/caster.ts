import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CasterDetail } from "../constants/casters";
import { FULLCASTERS } from "../constants/casters";

type CasterState = {
  caster: CasterDetail;
  setCaster: (caster: CasterDetail) => void;
  selectRandomCaster: () => void;
};

export const useCasterStore = create<CasterState>()(
  persist(
    (set) => ({
      caster: {
        name: "할머니",
        path: "/images/grandma.webp",
      },
      setCaster: (caster) => set({ caster }),
      selectRandomCaster: () => {
        const randomIndex = Math.floor(Math.random() * FULLCASTERS.length);
        const randomCaster = FULLCASTERS[randomIndex];
        set({ caster: randomCaster });
      },
    }),
    {
      name: "caster-storage",
      partialize: (state) => ({ caster: state.caster }),
    }
  )
);
