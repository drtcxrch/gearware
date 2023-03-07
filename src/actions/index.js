export const setUserBikes = (data) => {
  return {
    type: "SET_BIKES",
    payload: data,
  };
};

export const setUser = (data) => {
  return {
    type: "SET_USER",
    payload: data,
  };
};
