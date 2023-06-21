const more_reducer = (state, action) => {

  if (action.type === "SHOW_MORE") {
    return { ...state, show_more: {...state.show_more, height: action.payload.height, item: action.payload.item} };
  }

  if (action.type === "FAQ_ITEM") {
    return { ...state, faq_item: action.payload };
  }

  if (action.type === "SHOW_CONTACT_US") {
    return { ...state, contact_us: action.payload };
  }
  
  if (action.type === "SHOW_LOGOUT") {
    return { ...state, logout: {...state.logout, original: action.payload.original, sub: action.payload.sub} };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default more_reducer;
