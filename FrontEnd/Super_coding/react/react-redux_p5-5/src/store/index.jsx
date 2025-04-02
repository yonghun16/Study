import { createStore } from 'redux';

/* reducer */
const counterRedecer = (state = { counter: 0 }, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
}

/* store */
const store = createStore(counterRedecer);

export default store;
