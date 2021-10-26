export const addUser = (user) => {
  return async (dispatch) => {
    await dispatch({ type: "SET_USER", payload: user });
  };
};

export const claerUser = () => {
  return async (dispatch) => {
    await dispatch({ type: "CLAER_USER", payload: {} });
  };
};
