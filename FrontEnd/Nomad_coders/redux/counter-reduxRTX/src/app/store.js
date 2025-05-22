// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../fetures/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
