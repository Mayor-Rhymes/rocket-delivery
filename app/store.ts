import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cart';


export default configureStore({
  reducer: {
    cart: cartReducer,
  }
})