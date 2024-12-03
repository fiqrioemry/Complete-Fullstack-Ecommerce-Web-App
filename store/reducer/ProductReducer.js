import {
  // home page / category page / search page
  GET_PRODUCT_PROCESS,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILED,

  // product detail page
  PRODUCT_DETAIL_PROCESS,
  PRODUCT_DETAIL_SUCCESS,
  PRODUCT_DETAIL_FAILED,

  // store page
  STORE_PRODUCT_PROCESS,
  STORE_PRODUCT_SUCCESS,
  STORE_PRODUCT_FAILED,

  //
  PRODUCT_BY_CAT_PROCESS,
  PRODUCT_BY_CAT_SUCCESS,
  PRODUCT_BY_CAT_FAILED,

  // search input
  SEARCH_PROCESS,
  SEARCH_SUCCESS,
  SEARCH_FAILED,
} from "../constant/ProductType";

const initialState = {
  detail: [],
  search: [],
  product: [],
  products: [],
  storeProducts: [],
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
        detail: action.payload.detail,
      };
    }

    case GET_PRODUCT_FAILED:
      return {
        ...state,
        failed: true,
        loading: false,
      };

    // * GET ALL PRODUCTS ------------------------------------------------------------
    case SEARCH_PROCESS:
      return { ...state, loading: true };

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
      return { ...state, search: null || [], searchLoading: true };

    case SEARCH_SUCCESS: {
      return {
        ...state,
        success: true,
        searchLoading: false,
        search: action.payload.data,
      };
    }

    case SEARCH_FAILED:
      return {
        ...state,
        failed: true,
        searchLoading: false,
        message: action.payload,
      };

    default:
      return state;
  }
};
