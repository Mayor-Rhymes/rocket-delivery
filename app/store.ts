import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cart';
import { supabaseApi } from './features/api/supabase-api';
import { setupListeners } from '@reduxjs/toolkit/dist/query';


export const store = configureStore({
  reducer: {

    cart: cartReducer,
    [supabaseApi.reducerPath]: supabaseApi.reducer,
  },

  middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware().concat(supabaseApi.middleware),
  
})

setupListeners(store.dispatch)