"use client";
import { createContext, useState } from "react";

export const PriceValueContext = createContext();
export const PriceUpdaterContext = createContext();

export const PriceProvider = ({ children }) => {
  // State now holds an object mapping IDs to their checked states
  const [formData, setFormData] = useState([{ pris: 99 }, { antalStandard: 0 }]);

  // Function to update the checked state for a specific ID
  const updateCheckedState = (id, value) => {
    setCheckedStates((prevStates) => ({ ...prevStates, [id]: value }));
  };

  return (
    <PriceValueContext.Provider value={checkedStates}>
      <PriceUpdaterContext.Provider value={updateCheckedState}>{children}</PriceUpdaterContext.Provider>
    </PriceValueContext.Provider>
  );
};
