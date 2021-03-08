const displaySearchReducer = (state = true, action) => {
  switch (action.type) {
    case "show":
      return true;

    case "hide":
      return false;
    default:
      return state;
  }
};

export default displaySearchReducer;
