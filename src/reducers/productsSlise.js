import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [],
};
export const productsSlise = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: {
      reducer(state, action) {
        state.products.push(action.payload);
      },
      prepare(name, description, price, available) {
        return {
          payload: { id: Date.now(), name, description, price, available },
        };
      },
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    updateProduct: (state, action) => {
      const findIndex = state.products.findIndex(
        (item) => item.id === action.payload.id
      );
      if (findIndex !== -1) {
        state.products[findIndex] = {
          ...state.products[findIndex],
          ...action.payload,
        };
      }
    },
    toggleAvailable: (state, action) => {
      const product = state.products.find((item) => item.id === action.payload);
      if (product) {
        product.available = !product.available;
      }
    },
  },
});

export const { addProduct, deleteProduct, updateProduct, toggleAvailable } =
  productsSlise.actions;

export default productsSlise.reducer;
