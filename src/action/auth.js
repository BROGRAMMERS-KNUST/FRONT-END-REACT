import * as api from "../api/index";

export const signup = (userData, history) => async (dispatch) => {
  try {
    const { data } = await api.signup(userData);
    dispatch({ type: "AUTH", data });
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const login = (loginData, history) => async (dispatch) => {
  try {
    const { data } = await api.login(loginData);
    dispatch({ type: "AUTH", data });
    history.go("/");
  } catch (error) {
    console.log(error);
  }
};
