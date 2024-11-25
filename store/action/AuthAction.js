import {
  LOGIN_PROCESS,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  REGISTER_PROCESS,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  LOGOUT_PROCESS,
  LOGOUT_SUCCESS,
  RESET,
} from "../constant/AuthType";

import Cookies from "js-cookie";
import callApi from "../../services/index";

//  1. login
export const userLogin = (formData) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_PROCESS });

    const response = await callApi.post("/api/auth/login", formData, {
      withCredentials: true,
    });

    Cookies.set("accessToken", response.data.data.accessToken, {
      expires: 15 / 1440,
    });

    dispatch({ type: LOGIN_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: LOGIN_FAILED, payload: error.response.data.message });
  }
};

//  2. register
export const userRegister = (formData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_PROCESS });

    console.log("PRINT LOG INFO:", formData);

    const response = await callApi.post("/api/auth/register", formData, {
      withCredentials: true,
    });

    dispatch({ type: REGISTER_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: REGISTER_FAILED, payload: error.response.data.message });
  }
};

// 3. logout
export const userLogout = () => async (dispatch) => {
  dispatch({ type: LOGOUT_PROCESS });

  const response = await callApi.get("/api/auth/logout");

  Cookies.remove("accessToken");

  dispatch({ type: LOGOUT_SUCCESS, payload: response.data });
};

// 4. reset state
export const reset = () => async (dispatch) => {
  dispatch({ type: RESET });
};
