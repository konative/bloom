export const showRegister = () => (dispatch) => {
  dispatch({
    type: "showRegister",
  });
};

export const hideRegister = () => (dispatch) => {
  dispatch({
    type: "hideRegister",
  });
};
