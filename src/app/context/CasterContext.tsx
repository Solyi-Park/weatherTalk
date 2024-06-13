import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

import { ExtendedCaster } from "../components/CasterOptions";

type CasterContextType = {
  caster: ExtendedCaster;
  setCaster: Dispatch<SetStateAction<ExtendedCaster>>;
};

export const CasterContext = createContext<CasterContextType>({
  caster: "할머니",
  setCaster: () => {},
});

export const CasterProvider = ({ children }: { children: React.ReactNode }) => {
  const [caster, setCaster] = useState<ExtendedCaster>("할머니");
  return (
    <CasterContext.Provider value={{ caster, setCaster }}>
      {children}
    </CasterContext.Provider>
  );
};

export const useCaster = () => useContext(CasterContext);
