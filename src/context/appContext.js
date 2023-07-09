import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
import { DISPALY_ALERT, CLEAR_ALERT } from "./actions";

const initialeState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertTyoe: "",
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialeState);

  const displayAlert = () => {
    dispatch({ type: DISPALY_ALERT });
    clearAlert();
  };
  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  return (
    <AppContext.Provider value={{ ...state, displayAlert }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialeState, useAppContext };
