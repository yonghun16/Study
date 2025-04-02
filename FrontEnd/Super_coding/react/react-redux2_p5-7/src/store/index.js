import { configureStore, createSlice } from '@reduxjs/toolkit';

/* slice */
// counterSlice
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

// authSlice
const initialAuthState = { 
  isAuthenticated: false 
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    }
  }
});

/* store */
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer
  },
});

/* actions */
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
