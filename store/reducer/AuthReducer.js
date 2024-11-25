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

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  loading: false,
  success: false,
  failed: false,
  message: "",
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // * LOGIN ------------------------------------------------------------

    case LOGIN_PROCESS:
      return { ...state, loading: true, message: "" };

    case LOGIN_SUCCESS: {
      localStorage.setItem("user", JSON.stringify(action.payload.data.user));
      return {
        ...state,
        user: action.payload.data.user,
        loading: false,
        success: true,
        message: action.payload.message,
      };
    }

    case LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        failed: true,
        message: action.payload,
      };

    // * REGISTER ------------------------------------------------------------

    case LOGOUT_PROCESS:
    case REGISTER_PROCESS:
      return { ...state, loading: true, message: "" };

    case REGISTER_SUCCESS: {
      return {
        ...state,
        loading: false,
        success: true,
        message: action.payload.message,
      };
    }

    case REGISTER_FAILED:
      return {
        ...state,
        loading: false,
        failed: true,
        message: action.payload,
      };

    // * LOGOUT ------------------------------------------------------------

    case LOGOUT_PROCESS:
      return { ...state, loading: true, message: "" };

    case LOGOUT_SUCCESS: {
      localStorage.removeItem("user");
      return {
        ...state,
        user: null,
        loading: false,
        success: true,
        message: action.payload.message,
      };
    }

    case RESET:
      return {
        ...state,
        loading: false,
        failed: false,
        success: false,
        message: "",
      };

    default:
      return state;
  }
};
