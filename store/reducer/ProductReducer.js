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
  PRODUCT_BY_CAT_PROCESS,
  PRODUCT_BY_CAT_SUCCESS,
  PRODUCT_BY_CAT_FAILED,
  SEARCH_PROCESS,
  SEARCH_SUCCESS,
  SEARCH_FAILED,
} from "../constant/ProductType";

const initialState = {
  total: 0,
  search: null || [],
  product: null || [],
  products: null || [],
  loading: false,
  success: false,
  failed: false,
  message: "",
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    // * GET ALL PRODUCTS ------------------------------------------------------------

    case GET_PRODUCT_PROCESS:
      return { ...state, loading: true };

    case GET_PRODUCT_SUCCESS: {
      return {
        ...state,
        success: true,
        loading: false,
        products: action.payload.data,
        total: action.payload.totalProducts,
      };
    }

    case GET_PRODUCT_FAILED:
      return {
        ...state,
        failed: true,
        loading: false,
        message: action.payload,
      };

    // * GET PRODUCT DETAILS ------------------------------------------------------------

    case PRODUCT_DETAIL_PROCESS:
      return { ...state, loading: true };

    case PRODUCT_DETAIL_SUCCESS: {
      return {
        ...state,
        success: true,
        loading: false,
        product: action.payload.data,
      };
    }

    case PRODUCT_DETAIL_FAILED:
      return {
        ...state,
        failed: true,
        loading: false,
        message: action.payload,
      };

    // * GET STORE PRODUCTS ------------------------------------------------------------

    case STORE_PRODUCT_PROCESS:
      return { ...state, loading: true };

    case STORE_PRODUCT_SUCCESS: {
      return {
        ...state,
        success: true,
        loading: false,
        products: action.payload.data,
      };
    }

    case STORE_PRODUCT_FAILED:
      return {
        ...state,
        failed: true,
        loading: false,
        message: action.payload,
      };

    // * GET RELATED PRODUCTS ------------------------------------------------------------

    case PRODUCT_BY_CAT_PROCESS: {
      return {
        ...state,
        loading: true,
      };
    }
    case PRODUCT_BY_CAT_SUCCESS: {
      return {
        ...state,
        success: true,
        loading: false,
        products: action.payload.data,
      };
    }
    case PRODUCT_BY_CAT_FAILED: {
      return {
        ...state,
        failed: true,
        loading: false,
        message: action.payload,
      };
    }

    case SEARCH_PROCESS:
      return { ...state, search: null || [], loading: true };

    case SEARCH_SUCCESS: {
      return {
        ...state,
        success: true,
        loading: false,
        search: action.payload.data,
      };
    }

    case SEARCH_FAILED:
      return {
        ...state,
        failed: true,
        loading: false,
        message: action.payload,
      };

    default:
      return state;
  }
};
