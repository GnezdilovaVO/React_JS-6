import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../reducers/productsSlise";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});
