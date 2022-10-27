import * as api from "../api/";

export const forgotpassword =
  (forgotpasswordData, history) => async (dispatch) => {
    const { data } = await api.forgotpassword(forgotpasswordData);
    console.log(forgotpasswordData);
    // dispatch({ type: "AUTH", data });
    history.push("/");
    window.location.reload();
  };
