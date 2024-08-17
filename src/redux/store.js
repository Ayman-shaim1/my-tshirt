import { configureStore } from '@reduxjs/toolkit';

import { combineReducers } from 'redux';
import cartSlice from './cartSlice'; // Ensure this path is correct

const rootReducer = combineReducers({
  cart: cartSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;