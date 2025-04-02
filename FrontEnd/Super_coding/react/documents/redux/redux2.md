## Redux 2


### React-redux
- 리덕스 : 자바스크립트 앱을 위한 예측 가능한 상태 컨테이너
- 리액트 리덕스 : 리덕스를 위한 리액트 바인딩 공식 도구
```bash
$ npm install redux react-redux
```

### Store, Reducer 만들기
```jsx
// store/index.jsx

import { createStore } from redux;

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

```

### Provider로 감싸기
- 리액트에서 리덕스를 사용하기 위해서는 React-redux의 Provider로 \<App />을 최상단에서 감싸줍니다.
- 그리고 store를 이 Provider로 넘겨줘야 합니다.
```jsx
// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

### useSelector
- 리액트 리덕스 팀에서 만든 커스텀 훅 
- State로부터 값을 가져올 때 사용.
- state가 변경되면 해당 컴포넌트가 자동으로 리렌더링됨.
```jsx
// Counter.js
import classes from './Counter.module.css';
import { useSelector } from 'react-redux';      // useSelector import

const Counter = () => {
  const toggleCounterHandler = () => {};
  const counter = useSelector((state) => state.counter);  // useSelector로 state.counter 가져오기

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>   // counter를 사용
      <button onClick={toggleCounterHandler}>토글 카운터</button>
    </main>
  );
};

export default Counter;
```

### useSelector 최적화
- Redux 상태가 변경될 때마다 useSelector()를 사용하는 컴포넌트는 다시 렌더링함.
- 그런데 우리가 관심 있는 값이 변경되지 않았는데도 리렌더링되면 비효율적임. 따라서 최적화가 필요

#### 방법 1. useSelector를 여러번 사용함.
- counter전체가 아닌, number와 diff만 바뀌면 렌더링함.
```jsx
const number = useSelector((state) => state.counter.number);
const diff = useSelector((state) => state.counter.diff);
```

#### 방법 2. shallowEqual 연산
- prev: 이전 상태 값, next: 새로운 상태 값
- 두 값이 같으면(true 반환) 컴포넌트 리렌더링을 막아줌.
- 두 값이 다르면(false 반환) 컴포넌트가 리렌더링됨.
```jsx
import { useSelector } from 'react-redux';

const MyComponent = () => {
  // 직접 비교 연산을 사용하여 최적화
  const count = useSelector(state => state.counter.value, (prev, next) => prev === next);

  return <div>카운트 값: {count}</div>;
};
```

### useDispatch
```jsx
// Counter.js
import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const toggleCounterHandler = () => {};
  const counter = useSelector((state) => state.counter);  // useSelector로 state.counter 가져오기
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: 'increment' });
  };
  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>토글 카운터</button>
      <button onClick={incrementHandler}>숫자 증가</button>
      <button onClick={decrementHandler}>숫자 감소</button>
    </main>
  );
};

export default Counter;
```
