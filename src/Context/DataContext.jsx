
import { createContext } from "react";
export const DataContext = createContext();

export const DataContextHandler = ({ children }) => {
  return (
    <div>
      <DataContext.Provider
        value={{ video: "available" }}
      > {children}</DataContext.Provider>
    </div>
  );
};
