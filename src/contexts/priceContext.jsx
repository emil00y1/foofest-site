import { createContext, useState } from "react";

export const PriceValueContext = createContext();
export const PriceUpdaterContext = createContext();

export const PriceProvider = ({ children }) => {
  const [checked, setChecked] = useState("Standard");

  return (
    <PriceValueContext.Provider value={checked}>
      <PriceUpdaterContext.Provider value={setChecked}>{children}</PriceUpdaterContext.Provider>
    </PriceValueContext.Provider>
  );
};
