import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [currentTab, setCurrentTab] = useState("overview");

  return (
    <AppContext.Provider value={{ setCurrentTab, currentTab }}>
      {children}
    </AppContext.Provider>
  );
};

export const usePlanetFactsContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
