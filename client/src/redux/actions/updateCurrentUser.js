export const updateCurrentUser = (username) => async (dispatch, getState) => {
  dispatch({
    type: "updateUser",
    payload: username,
  });
};
