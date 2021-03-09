const currentUserReducer = (state = "", action) => {
  switch (action.type) {
    case "updateUser":
      return {
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default currentUserReducer;
