import { thunk } from "redux-thunk";
import { authReducer } from "./reducer/AuthReducer";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { productReducer } from "./reducer/ProductReducer";
import { cartReducer } from "./reducer/CartReducer";

const reducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  cart: cartReducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
