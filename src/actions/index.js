export const login = () => {
  return {
    type: "LOGIN",
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};

export const refresh = (key) => {
  return {
    type: "REFRESH",
    payload: key,
  };
};

export const access = (key) => {
  return {
    type: "ACCESS",
    payload: key,
  };
};
