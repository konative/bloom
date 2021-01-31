const updateListingsReducer = (state = [{ name: "dog" }], action) => {
  switch (action.type) {
    case "update":
      return {
        listingReducer: action.payload,
      };
    default:
      return state;
  }
};

export default updateListingsReducer;
