export const login = () => (dispatch, getState) => {
  dispatch({
    type: "login",
  });
};

export const logout = () => (dispatch, getState) => {
  localStorage.removeItem("token");

  dispatch({
    type: "logout",
  });
};
