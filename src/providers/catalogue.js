import { createContext, useState } from "react";
import defaultState from "../db/data";

export const CatalogueContext = createContext([]);

export const CatalogueProvider = ({ children }) => {
  const [catalogue] = useState(defaultState);

  return (
    <CatalogueContext.Provider value={{ catalogue }}>
      {children}
    </CatalogueContext.Provider>
  );
};
