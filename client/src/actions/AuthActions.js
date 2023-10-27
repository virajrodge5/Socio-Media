import * as AuthApi from "../api/AuthRequests";

export const logIn = (formData, navigate) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await AuthApi.logIn(formData);
    dispatch({ type: "AUTH_SUCCESS", data: data });
    navigate("../home", { replace: true });
    alert('Login successful');
  } catch (error) {
    console.log(error);
    alert('Login failed. Please try again');
    dispatch({ type: "AUTH_FAIL" });
  }
};

export const signUp = (formData, navigate) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await AuthApi.signUp(formData);
    dispatch({ type: "AUTH_SUCCESS", data: data });
    navigate("../home", { replace: true });
    alert('Registration successful');
  } catch (error) {
    console.log(error);
    alert('Registration failed. Please try again');
    dispatch({ type: "AUTH_FAIL" });
  }
};


export const logout = ()=> async(dispatch)=> {
  dispatch({type: "LOG_OUT"})
}
