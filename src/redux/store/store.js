import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/cartSlice'
import productsReducer from '../features/productsSlice'
import isMenuOpenReducer from '../features/isMenuOpenSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    isMenuOpen: isMenuOpenReducer
  },
})