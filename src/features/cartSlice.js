import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart = [...state.cart, { ...action.payload, quantity: 1 }];
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((cartItem, index) => {
        return cartItem.id !== action.payload.id;
      });
    },
    increaseQunatity: (state,action) => {
      const copyState = [...state.cart]
      const newState = copyState.map(cartItem=>{
        if(cartItem.id === action.payload.id){
          cartItem.quantity++
          return cartItem
        }
        else{
          return cartItem
        }
      })
      state.cart = [...newState]
    },
    decreaseQunatity: (state,action) => {
      const copyState = [...state.cart]
      const newState = copyState.map(cartItem=>{
        if(cartItem.id === action.payload.id){
          if(cartItem.quantity === 0) return cartItem
          else if(cartItem.quantity !== 0){
            cartItem.quantity--
            return cartItem
          }
        }
        else{
          return cartItem
        }
      })
      state.cart = [...newState]
    },
  },
});
export const { addToCart, removeFromCart, increaseQunatity, decreaseQunatity } = cartSlice.actions;

export const cartSelector = (state) => state.cart.cart;

export default cartSlice.reducer;
