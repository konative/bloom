export const login = () => (dispatch, getState) => {
  dispatch({
    type: "login",
  });
};

export const logout = () => (dispatch) => {
  dispatch({
    type: "logout",
  });
};
