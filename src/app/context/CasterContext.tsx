import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { Caster } from "../service/openai";
import { CASTERS } from "../components/CasterAvatar";

type CasterContextType = {
  caster: Caster;
  setCaster: Dispatch<SetStateAction<Caster>>;
};

export const CasterContext = createContext<CasterContextType>({
  caster: "할머니",
  setCaster: () => {},
});

export const CasterProvider = ({ children }: { children: React.ReactNode }) => {
  const [caster, setCaster] = useState<Caster>("할머니");
  return (
    <CasterContext.Provider value={{ caster, setCaster }}>
      {children}
    </CasterContext.Provider>
  );
};

export const useCaster = () => useContext(CasterContext);
