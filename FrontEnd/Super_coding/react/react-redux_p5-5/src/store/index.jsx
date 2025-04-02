import { configureStore, createSlice } from '@reduxjs/toolkit';

/* slice */
const counterSlice = createSlice({
  name: 'counter',
  initialState: { counter: 0, showCounter: true },
  reducers: {
    increment(state) {
      state.counter++;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    decrement(state) {
      state.counter--;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

/* store */
const store = configureStore({
  reducer: counterSlice.reducer,
});

/* actions */
export const counterActions = counterSlice.actions;
export default store;
