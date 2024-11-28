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
} from "../constant/CartType";
import callApi from "../../services/index";

// FETCHING USER CART ITEM
export const getCartItem = () => async (dispatch) => {
  try {
    const response = await callApi.get(`/api/cart`);

    dispatch({ type: GET_CART_SUCCESS, payload: response.data.data });
  } catch (error) {
    dispatch({ type: GET_CART_FAILED, payload: error.message });
  }
};

// ADD PRODUCT TO CART
export const addToCart = (productId, quantity) => async (dispatch) => {
  try {
    dispatch({ type: ADD_CART_PROCESS });

    const response = await callApi.post(`/api/cart/add`, {
      productId,
      quantity,
    });
    dispatch({ type: ADD_CART_SUCCESS, payload: response.data.message });
  } catch (error) {
    dispatch({ type: ADD_CART_FAILED, payload: error.response.data.message });
  }
};

// UPDATE PRODUCT QUANTITY IN CART
export const updateCartItem = (id, quantity) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_CART_PROCESS });

    await callApi.put(`/api/cart/update/${id}`, { quantity });

    dispatch({ type: UPDATE_CART_SUCCESS, payload: "" });
  } catch (error) {
    dispatch({ type: UPDATE_CART_FAILED, payload: error.data.message });
  }
};

// DELETE PRODUCT FROM CART
export const deleteCartItem = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_CART_PROCESS });

    const response = await callApi.post(`/api/cart/delete/${id}`);

    dispatch({ type: DELETE_CART_SUCCESS, payload: response.data.message });
  } catch (error) {
    dispatch({ type: DELETE_CART_FAILED, payload: error.data.message });
  }
};
