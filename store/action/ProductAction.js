import {
  // all product
  GET_PRODUCT_PROCESS,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILED,
  // product detail
  PRODUCT_DETAIL_PROCESS,
  PRODUCT_DETAIL_SUCCESS,
  PRODUCT_DETAIL_FAILED,

  // store product
  STORE_PRODUCT_PROCESS,
  STORE_PRODUCT_SUCCESS,
  STORE_PRODUCT_FAILED,

  // product by category
  PRODUCT_BY_CAT_PROCESS,
  PRODUCT_BY_CAT_SUCCESS,
  PRODUCT_BY_CAT_FAILED,

  // search product with query
  SEARCH_PROCESS,
  SEARCH_SUCCESS,
  SEARCH_FAILED,
} from "../constant/ProductType";

import callApi from "../../services/index";

//  1. GET_ALL_PRODUCT
export const getAllProducts =
  (limit = 8) =>
  async (dispatch) => {
    try {
      dispatch({ type: GET_PRODUCT_PROCESS });
      // TODO :timeout not necessary just to give an obvious UX when loading card, remove in production
      setTimeout(async () => {
        const response = await callApi.get(`/api/product?limit=${limit}`);

        dispatch({ type: GET_PRODUCT_SUCCESS, payload: response.data });
      }, 1500);
    } catch (error) {
      dispatch({
        type: GET_PRODUCT_FAILED,
        payload: error.response.data.message,
      });
    }
  };

// 2. GET PRODUCT DETAIL
export const getProductDetail = (slug) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAIL_PROCESS });

    const response = await callApi.get(`/api/product/${slug}`);

    dispatch({ type: PRODUCT_DETAIL_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAIL_FAILED,
      payload: error.response.data.message,
    });
  }
};

// 3. GET ALL STORE PRODUCTS
export const getAllStoreProducts = (slug) => async (dispatch) => {
  try {
    dispatch({ type: STORE_PRODUCT_PROCESS });

    const response = await callApi.get(`/api/product/store/${slug}`);

    dispatch({ type: STORE_PRODUCT_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({
      type: STORE_PRODUCT_FAILED,
      payload: error.response.data.message,
    });
  }
};

// 4. GET PRODUCT BY CATEGORY
export const getProductByCategory = (category) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_BY_CAT_PROCESS });
    const response = await callApi.get(`/api/product/category/${category}`);

    dispatch({ type: PRODUCT_BY_CAT_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({
      type: PRODUCT_BY_CAT_FAILED,
      payload: error.response.data.message,
    });
  }
};

// 4. SEARCH PRODUCT WITH QUERY
export const searchProducts =
  (
    search,
    category = "",
    minScore = "",
    maxScore = "",
    page = "",
    minPrice = "",
    maxPrice = "",
    city = "",
    sortBy = "",
    order = "asc",
    limit = "5"
  ) =>
  async (dispatch) => {
    try {
      dispatch({ type: SEARCH_PROCESS });

      const response = await callApi.get(
        `/api/product?search=${search}&category=${category}&minScore=${minScore}&maxScore=${maxScore}&page=${page}&minPrice=${minPrice}&maxPrice=${maxPrice}&city=${city}&sortBy=${sortBy}&order=${order}&limit=${limit}`
      );

      setTimeout(() => {
        dispatch({ type: SEARCH_SUCCESS, payload: response.data });
      }, 1000);
    } catch (error) {
      console.log("PRINT LOG INFO 1:", error);
      dispatch({
        type: SEARCH_FAILED,
        payload: error.response.data.message,
      });
    }
  };
