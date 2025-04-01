## Redux 1


### Redux란?
- Redux는 애플리케이션의 상태를 효율적으로 관리하는 JavaScript 상태 관리 라이브러리야. 주로 React 애플리케이션에서 많이 사용되지만, Vue, Angular 같은 다른 프레임워크에서도 활용할 수 있음.
```bash
$ npm install @reduxjs/toolkit react-redux
```

### 리덕스 코어 컨셉
- 리덕스(Redux)는 애플리케이션의 상태 관리를 위한 라이브러리로 주로 React와 함께 사용되지만, 다른 JavaScript 프레임워크와도 통합할 수 있음.

### 1. 스토어(Store)
- 애플리케이션의 전체 상태(state) 를 저장하는 단일 객체.
- 단 하나만 존재하며, 상태를 직접 변경할 수 없고 액션(action) 을 통해 변경해야 함.

### 2. 액션(Action)
- 상태(state)에 변화를 일으키는 유일한 방법.
- 반드시 type 속성을 가진 객체여야 하며, 필요한 추가 데이터(payload)를 포함할 수도 있음.
```JavaScript
const incrementAction = {
  type: "INCREMENT", 
  payload: 1
};
```

### 3. 리듀서(Reducer)
- 현재 상태(state)와 액션(action)을 받아서 새로운 상태를 반환하는 순수 함수.
- 상태를 직접 수정하지 않고, 기존 상태를 복사하여 새로운 상태를 반환해야 함.
```JavaScript
function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.payload };
    case "DECREMENT":
      return { count: state.count - action.payload };
    default:
      return state;
  }
}
```

### 4. 디스패치(Dispatch)
- 스토어에 액션을 보낼 때 사용하는 함수.
- 액션을 디스패치하면 리듀서가 호출되고, 새로운 상태가 생성됨.
```JavaScript
store.dispatch({ type: "INCREMENT", payload: 1 });
```

### 5. 구독(Subscribe)
- 스토어의 상태가 변경될 때 특정 함수를 실행하도록 등록하는 메서드.
- UI가 상태 변경을 감지하고 업데이트할 수 있도록 함.
```JavaScript
store.subscribe(() => {
  console.log("상태 변경됨:", store.getState());
});
```

### 6. 미들웨어(Middleware)
- 리덕스의 기본 흐름을 변경하거나 추가 기능을 제공하는 함수.
- 대표적인 미들웨어로 redux-thunk, redux-saga 등이 있으며, 비동기 액션 처리에 사용됨.

### 리덕스 데이터 흐름
- 1. UI에서 액션(Action) 발생 → dispatch(action)
- 2. 리듀서(Reducer)가 실행되어 새로운 상태 생성
- 3. 스토어(Store)에서 상태 변경 감지
- 4. 구독(Subscribe)된 UI가 변경된 상태를 반영하여 렌더링


### Redux 예제 (JavaScript)
```JavaScript
import { createStore } from "redux";

// 초기 상태
const initialState = { count: 0 };

// 리듀서 함수
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

// 스토어 생성
const store = createStore(counterReducer);

// 상태 변경 시 실행될 함수
store.subscribe(() => {
  console.log("현재 상태:", store.getState());
});

// 액션 디스패치
store.dispatch({ type: "INCREMENT" }); // count: 1
store.dispatch({ type: "INCREMENT" }); // count: 2
store.dispatch({ type: "DECREMENT" }); // count: 1
```

### Redux + React 예제 (useSelector, useDispatch 사용)
```jsx
import React from "react";
import { createStore } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";

// 초기 상태
const initialState = { count: 0 };

// 리듀서
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

// 스토어 생성
const store = createStore(counterReducer);

function Counter() {
  const count = useSelector((state) => state.count); // 상태 가져오기
  const dispatch = useDispatch(); // 액션 디스패치

  return (
    <div>
      <h1>카운터: {count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
```
