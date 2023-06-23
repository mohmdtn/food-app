const more_reducer = (state, action) => {

  if (action.type === "SHOW_MORE") {
    return { ...state, show_more: {...state.show_more, height: action.payload.height, item: action.payload.item} };
  }

  if (action.type === "FAQ_ITEM") {
    return { ...state, faq_item: action.payload };
  }

  if (action.type === "SHOW_CONTACT_US") {
    return { ...state, contact_us: {...state.contact_us, original: action.payload.original, sub: action.payload.sub} };
  }
  
  if (action.type === "SHOW_LOGOUT") {
    return { ...state, logout: {...state.logout, original: action.payload.original, sub: action.payload.sub} };
  }
  
  if (action.type === "SHOW_ORDER_INFO") {
    return { ...state, order_info: action.payload };
  }

  if (action.type === "SHOW_ORDER_PAGE") {
    return { ...state, order_page: {...state.order_page, page: action.payload.page, sub: action.payload.sub} };
  }

  if (action.type === "INVATE_MODAL") {
    return { ...state, invate_modal: action.payload };
  }

  if (action.type === "EXIT_MODAL") {
    return { ...state, exit_modal: action.payload };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default more_reducer;
