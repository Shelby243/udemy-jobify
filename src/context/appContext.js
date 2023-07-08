import React, { useState, useContext, useReducer } from "react";

const initialeState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertTyoe: "",
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, setState] = useState(initialeState);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialeState, useAppContext };
