## Redux 3


### Action에 payload를 전달하기
- Action에 payload을 통해 값을 전달해 주면, 더 다양하고 복잡한 로직을 처리할 수 있게 된다.
- Input을 통해 사용자로부터 값을 입력 받아 Action을 처리해 줄 수도 있다.
```jsx
// Counter.js
const Counter = () => {
  ...
  const increment10Handler = () => {
    dispatch({ type: 'increase', amount: 10 });  // reducer의 action이 amount도 받아줌 
  };
  ...
      <button onClick={increment10Handler}>숫자 10증가</button>
  ...

```
```jsx
// store/index.js 
/* reducer */
const counterRedecer = (state = { counter: 0 }, action) => {
  ... 
  if (action.type === 'increase') {
    return {
      counter: state.counter + action.amount,    // action.type, action.amount  두 개의 payload
    };
  }
  ...
}
```

### 여러 개의 state 속성 다루기 
- Store에서 여러 개의 데이터 object 형태로 다룰 수 있다.
- 여기서 조심할 점은, 항상 reducer는 state를 덮어 쓴다는 점이다. (불변성 유지 (Immutability))
- 만약 어떤 속성을 값을 입력하지 않으면, 그 값을 reducer는 undefined 처리 하게 된다.
- 그래서 ...state를 사용해서 기존 상태를 복사한 후 변경된 값을 덮어쓰는 방식으로 새로운 상태를 만들어 반환해야 한다.
```jsx
import { createStore } from 'redux';

/* reducer */
const counterRedecer = (state = { counter: 0, showCounter: true }, action) => {
  if (action.type === 'increment') {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }

  if (action.type === 'increase') {
    return {
      ...state,
      counter: state.counter + action.amount,
    };
  }

  if (action.type === 'decrement') {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }

  if (action.type === 'toggle') {
    return {
      ...state,
      showCounter: !state.showCounter,
    };
  }

  return state;
}

/* store */
const store = createStore(counterRedecer);

export default store;
```
