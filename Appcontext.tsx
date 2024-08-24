import React, { createContext, PropsWithChildren, useContext, useState } from "react";
import { getDataObject } from "./helper/mystorage";

// Define the initial state for your context
interface AppState {
  userData: any;
  setUserData: any;
  loading: boolean;
  handleUpdateUserData: (data: any) => void;
  handleRemoveUserData: () => void
}

// Create a context with the initial state
const AppContext = createContext<AppState>({} as AppState);

export const useAppContext = () => {
  return useContext(AppContext)
}

// Create a provider component to wrap your app with
const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [userData, setUserData] = React.useState(null);
  const [loading, setLoading] = useState<boolean>(true);

  

  React.useEffect(() => {
    setLoading(true)
    getDataObject("user").then((data) => {
      setUserData(data);
      setLoading(false)
    });
  }, []);

  React.useEffect(() => {
    getDataObject("user").then((data) => {
      setUserData(data);
    });
  }, []);

  const handleUpdateUserData = (data: any) => {
    setUserData(data)
  };

  const handleRemoveUserData = () => {
    setUserData(null)  
  }
  
  const value = {
    userData,
    setUserData,
    loading,
    handleUpdateUserData,
    handleRemoveUserData

  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };

