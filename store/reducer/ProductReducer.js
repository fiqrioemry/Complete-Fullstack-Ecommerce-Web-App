import {
  GET_PRODUCT_PROCESS,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILED,
  PRODUCT_DETAIL_PROCESS,
  PRODUCT_DETAIL_SUCCESS,
  PRODUCT_DETAIL_FAILED,
  STORE_PRODUCT_PROCESS,
  STORE_PRODUCT_SUCCESS,
  STORE_PRODUCT_FAILED,
  PRODUCT_BY_CAT_SUCCESS,
  RESET,
} from "../constant/ProductType";

const initialState = {
  total: 0,
  product: [],
  products: [],
  storeProduct: [],
  relatedProducts: [],
  loading: false,
  success: false,
  failed: false,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    // * GET ALL PRODUCTS ------------------------------------------------------------

    case GET_PRODUCT_PROCESS:
      return { ...state, loading: true };

    case GET_PRODUCT_SUCCESS: {
      return {
        ...state,
        products: action.payload.data,
        total: action.payload.totalProducts,
        loading: false,
        success: true,
      };
    }

    case GET_PRODUCT_FAILED:
      return {
        ...state,
        loading: false,
        failed: true,
        message: action.payload,
      };

    // * GET PRODUCT DETAILS ------------------------------------------------------------

    case PRODUCT_DETAIL_PROCESS:
      return { ...state, loading: true };

    case PRODUCT_DETAIL_SUCCESS: {
      return {
        ...state,
        product: action.payload.data,
        loading: false,
        success: true,
      };
    }

    case PRODUCT_DETAIL_FAILED:
      return {
        ...state,
        loading: false,
        failed: true,
        message: action.payload,
      };

    // * GET STORE PRODUCTS ------------------------------------------------------------

    case STORE_PRODUCT_PROCESS:
      return { ...state, loading: true };

    case STORE_PRODUCT_SUCCESS: {
      return {
        ...state,
        storeProduct: action.payload.data,
        loading: false,
        success: true,
      };
    }

    case STORE_PRODUCT_FAILED:
      return {
        ...state,
        loading: false,
        failed: true,
        message: action.payload,
      };

    // * GET RELATED PRODUCTS ------------------------------------------------------------
    case PRODUCT_BY_CAT_SUCCESS: {
      return {
        ...state,
        relatedProducts: action.payload.data,
      };
    }

    case RESET:
      return {
        ...state,
        loading: false,
        failed: false,
        success: false,
      };

    default:
      return state;
  }
};
