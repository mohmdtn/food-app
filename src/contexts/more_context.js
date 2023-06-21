import React, { useReducer } from "react";
import reducer from "../reducers/more_reducer";

const initialState = {
  loading: false,
  show_more: {
    height: "0",
    item: "",
  },
  faq_item : "",
  logout: {
    original: "exit",
    sub: ""
  },
  contact_us: "faq",
  home_fiter: ["all", "coffe"],
};

export const MoreContext = React.createContext();

export const MoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const showMore = (height, item) => {
    dispatch({ type: "SHOW_MORE", payload: { height, item } });
  };

  const faqItem = (id) => {
    dispatch({ type: "FAQ_ITEM", payload: id });
  };

  const showContactUs = (item) => {
    dispatch({ type: "SHOW_CONTACT_US", payload: item });
  };

  const showLogout = (original, sub) => {
    dispatch({ type: "SHOW_LOGOUT", payload: { original, sub } });
  };

  return (
    <MoreContext.Provider value={{ ...state, showMore, faqItem, showContactUs, showLogout }}>
      {children}
    </MoreContext.Provider>
  );
};
