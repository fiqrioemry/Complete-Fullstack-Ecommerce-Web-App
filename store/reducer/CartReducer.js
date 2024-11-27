import {
  GET_CART_PROCESS,
  GET_CART_SUCCESS,
  GET_CART_FAILED,
  ADD_CART_PROCESS,
  ADD_CART_SUCCESS,
  ADD_CART_FAILED,
  UPDATE_CART_PROCESS,
  UPDATE_CART_SUCCESS,
  UPDATE_CART_FAILED,
  DELETE_CART_PROCESS,
  DELETE_CART_SUCCESS,
  DELETE_CART_FAILED,
  RESET_STATUS,
} from "../constant/CartType";

const initialState = {
  cart: null,
  loading: false,
  success: false,
  failed: false,
  message: "",
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    // * GET_CART ------------------------------------------------------------
    case GET_CART_SUCCESS: {
      return {
        ...state,
        cart: action.payload.cart,
        loading: false,
      };
    }

    // * ADD CART, UPDATE CART, DELETE CART ------------------------------------------------------------
    case GET_CART_PROCESS:
    case ADD_CART_PROCESS:
    case UPDATE_CART_PROCESS:
    case DELETE_CART_PROCESS:
      return { ...state, loading: true, message: "" };

    case ADD_CART_SUCCESS:
    case UPDATE_CART_SUCCESS:
    case DELETE_CART_SUCCESS: {
      return {
        ...state,
        loading: false,
        success: true,
        message: action.payload,
      };
    }

    case GET_CART_FAILED:
    case ADD_CART_FAILED:
    case UPDATE_CART_FAILED:
    case DELETE_CART_FAILED:
      return {
        ...state,
        loading: false,
        failed: true,
        message: action.payload,
      };

    case RESET_STATUS:
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
