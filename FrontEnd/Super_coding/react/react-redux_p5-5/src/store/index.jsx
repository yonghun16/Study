import { configureStore, createSlice } from '@reduxjs/toolkit';

/* slice */
const counterSlice = createSlice({
  name: 'counter',                                   // reducer name
  initialState: { counter: 0, showCounter: true },   // state
  reducers: {                                        // action
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
  reducer: counterSlice.reducer,                     // reducer를 counterSlice로 연결
});

/* actions */
export const counterActions = counterSlice.actions;
export default store;
