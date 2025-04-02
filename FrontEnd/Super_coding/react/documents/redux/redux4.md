## Redux 4.2 이후

### index.jsx 
- createSlice를 사용하여 reducer와 actions을 함께 정의
- configureStore를 사용하여 Redux store 생성
- actions을 counterActions로 export하여 사용
```jsx
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
```

### counter.jsx 
- dispatch({ type: 'toggle' }) -> dispatch(counterActions.toggle())
- dispatch({ type: 'increment' }) -> dispatch(counterActions.increment())
- dispatch({ type: 'increase', amount: 10 }) -> dispatch(counterActions.increase(10))
- dispatch({ type: 'decrement' }) -> dispatch(counterActions.decrement())
```jsx
import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store';  // counterActions를 import

const Counter = () => {
  const counter = useSelector((state) => state.counter);  // useSelector로 state.counter 가져오기
  const showCounter = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());  // counterActions.toggle() 사용
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment());  // counterActions.increment() 사용
  };

  const increment10Handler = () => {
    dispatch(counterActions.increase(10));  // counterActions.increase(10) 사용
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());  // counterActions.decrement() 사용
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <button onClick={toggleCounterHandler}>토글 카운터</button>
      <button onClick={incrementHandler}>숫자 증가</button>
      <button onClick={increment10Handler}>숫자 10증가</button>
      <button onClick={decrementHandler}>숫자 감소</button>
    </main>
  );
};

export default Counter;
```
