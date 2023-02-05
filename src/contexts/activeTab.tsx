import React, { useContext, useState } from "react";
import { IActiveTabContext } from "../types/planet";

type Props = {
  children: React.ReactNode;
};

const ActiveTabContext = React.createContext({} as IActiveTabContext);

const useActiveTab = () => useContext(ActiveTabContext);

const ActiveTabProvider: React.FC<Props> = ({ children }) => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <ActiveTabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </ActiveTabContext.Provider>
  );
};

export { ActiveTabProvider, useActiveTab };
