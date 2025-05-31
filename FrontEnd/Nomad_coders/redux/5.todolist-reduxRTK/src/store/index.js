// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import toDoReducer from './toDoSlice';

const store = configureStore({
  reducer: {
    toDos: toDoReducer,
  },
});

export default store;
