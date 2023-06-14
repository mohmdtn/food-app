const more_reducer = (state, action) => {

  if (action.type === "SHOW_MORE") {

    return { ...state, show_more: {...state.show_more, height: action.payload.height, item: action.payload.item} };
  }
  

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default more_reducer;
