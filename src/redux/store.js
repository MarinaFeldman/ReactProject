import { configureStore } from '@reduxjs/toolkit';
import souvenirsReducer from './souvenirsUnit';
import cartReducer from './cartSlice';

export const store = configureStore({
  reducer: {
    souvenirs: souvenirsReducer,
    cart: cartReducer
  },
});
