export const show = () => (dispatch, getState) => {
  dispatch({
    type: "show",
  });
};

export const hide = () => (dispatch) => {
  dispatch({
    type: "hide",
  });
};
