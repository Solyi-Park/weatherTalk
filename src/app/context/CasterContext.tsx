import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { Caster } from "../service/openai";
import { CasterDetail } from "../data/casters";

type CasterContextType = {
  caster: CasterDetail;
  setCaster: Dispatch<SetStateAction<CasterDetail>>;
};

export const CasterContext = createContext<CasterContextType>({
  caster: {
    name: "할머니",
    path: "/images/grandma.webp",
  },
  setCaster: () => {},
});

export const CasterProvider = ({ children }: { children: React.ReactNode }) => {
  const initialState: CasterDetail = {
    name: "할머니",
    path: "/images/grandma.webp",
  };
  const [caster, setCaster] = useState<CasterDetail>(initialState);
  return (
    <CasterContext.Provider value={{ caster, setCaster }}>
      {children}
    </CasterContext.Provider>
  );
};

export const useCaster = () => useContext(CasterContext);
