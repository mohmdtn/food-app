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
  contact_us: {
    original: "faq",
    sub: "faq",
  },
  order_info: "",
  order_page: {
    page: "takeAway",
    sub: "all"
  },
  invate_modal: false,
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

  const showContactUs = (original, sub) => {
    dispatch({ type: "SHOW_CONTACT_US", payload: { original, sub } });
  };

  const showLogout = (original, sub) => {
    dispatch({ type: "SHOW_LOGOUT", payload: { original, sub } });
  };

  const showOrderInfo = (item) => {
    dispatch({ type: "SHOW_ORDER_INFO", payload: item });
  };

  const showOrderPage = (page, sub) => {
    dispatch({ type: "SHOW_ORDER_PAGE", payload: { page, sub } });
  };

  const invateModal = (state) => {
    dispatch({ type: "INVATE_MODAL", payload: state });
  }

  return (
    <MoreContext.Provider value={{ ...state, showMore, faqItem, showContactUs, showLogout, showOrderInfo, showOrderPage, invateModal }}>
      {children}
    </MoreContext.Provider>
  );
};
