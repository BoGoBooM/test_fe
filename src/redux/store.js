import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import itemsReducer from './itemsSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    items: itemsReducer,
  },
});
