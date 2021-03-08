export const login = () => (dispatch, getState) => {
  dispatch({
    type: "login",
  });
};

export const logout = () => (dispatch, getState) => {
  dispatch({
    type: "logout",
  });
};
