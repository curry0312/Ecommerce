import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((cartItem, index) => {
        return cartItem.id !== action.payload.id;
      });
    },
  },
});
export const { addToCart, removeFromCart } = cartSlice.actions;

export const cartSelector = (state) => state.cart.cart;

export default cartSlice.reducer;
