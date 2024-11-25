import { thunk } from "redux-thunk";
import { authReducer } from "./reducer/AuthReducer";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { productReducer } from "./reducer/ProductReducer";

const reducer = combineReducers({
  auth: authReducer,
  product: productReducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
