import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/more_reducer";

const initialState = {
  loading: false,
  home_fiter: ["all", "coffe"],
};

export const MoreContext = React.createContext();

export const MoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const showMore = () => {
    dispatch({ type: "SHOW_MORE" });
  };

  const homeFilter = (name) => {
    dispatch({ type: "HOME_FILTER", payload: name });
  };

  return (
    <MoreContext.Provider value={{ ...state, homeFilter, showMore }}>
      {children}
    </MoreContext.Provider>
  );
};
