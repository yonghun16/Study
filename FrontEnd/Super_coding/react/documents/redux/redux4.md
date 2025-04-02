## Redux Toolkit(RTX)


### RTX란?
- 리액트에 리덕스를 사용하면서, 프로젝트가 커지면 관리가 복잡해지고 여러 가지 이슈가 발생
- 이를 해결하기 위해 나온 도구가 RTX
- 필수는 아니지만, 리액트-리덕스를 사용한다면 권장

### index.jsx 
- createSlice : '리듀서'와 '액션'을 편리하게 관리할 수 있게 도와준다. 
  - 여기서 actions을 설정하면 각 컴포넌트에서 바로 디스패치해서 쓸 수 있다.
  - actions을 counterActions로 export하여 사용
  - createStore 방식에서는 불변성을 직접 유지해야 해서 ...state를 사용해야 하지만, 
  - createSlice 방식에서는 Immer.js가 자동으로 새로운 상태를 만들어주기 때문에 직접 상태를 변경하는 코드가 가능함. 
- configureStore : 여러개의 reducer를 하나의 스토어에서 관리할 수 있게 해준다.
```jsx
// index.jsx
import { configureStore, createSlice } from '@reduxjs/toolkit';

/* slice */
const counterSlice = createSlice({
  name: 'counter',                                   // reducer name
  initialState: { counter: 0, showCounter: true },   // state
  reducers: {                                        // actions of reducer
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
```


### counter.jsx 
- dispatch({ type: 'toggle' }) -> dispatch(counterActions.toggle())
- dispatch({ type: 'increment' }) -> dispatch(counterActions.increment())
- dispatch({ type: 'increase', amount: 10 }) -> dispatch(counterActions.increase(10))
- dispatch({ type: 'decrement' }) -> dispatch(counterActions.decrement())
```jsx
// counter.jsx

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
