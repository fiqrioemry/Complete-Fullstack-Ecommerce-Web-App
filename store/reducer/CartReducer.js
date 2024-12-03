import {
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
  RESET,
} from "../constant/CartType";

const initialState = {
  cart: null,
  loading: false,
  loadingItem: null,
  success: false,
  failed: false,
  message: "",
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    // * GET_CART ------------------------------------------------------------
    case GET_CART_SUCCESS: {
      const cart = action.payload.cart.reduce((acc, curr) => {
        acc[curr.storeName] = acc[curr.storeName] || [];
        acc[curr.storeName].push(curr);
        return acc;
      }, {});
      return {
        ...state,
        cart: cart,
      };
    }

    // * ADD CART, UPDATE CART, DELETE CART ------------------------------------------------------------
    case DELETE_CART_PROCESS:
    case ADD_CART_PROCESS:
      return {
        ...state,
        success: false,
        failed: false,
        loading: true,
        loadingItem: action.payload,
        message: "",
      };

    case ADD_CART_SUCCESS:
    case DELETE_CART_SUCCESS: {
      return {
        ...state,
        success: true,
        loading: false,
        loadingItem: null,
        message: action.payload,
      };
    }

    case GET_CART_FAILED:
    case ADD_CART_FAILED:
    case DELETE_CART_FAILED:
      return {
        ...state,
        failed: true,
        loading: false,
        loadingItem: null,
        message: action.payload,
      };

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
