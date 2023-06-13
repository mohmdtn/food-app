const more_reducer = (state, action) => {

  if (action.type === "HOME_FILTER") {
    return { ...state };
  }
  

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default more_reducer;
