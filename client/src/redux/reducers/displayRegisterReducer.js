const displayRegisterReducer = (state = false, action) => {
  switch (action.type) {
    case "showRegister":
      return true;

    case "hideRegister":
      return false;
    default:
      return state;
  }
};

export default displayRegisterReducer;
