## useReducer

> https://react.dev/reference/react/useReducer

#### useState의 한계
- React 상태 업데이트는 비동기적으로 실행됩니다.
- 이 코드가 실행될 때, 이전 상태 값(emailState)이 아직 변경되지 않았을 수도 있습니다.
- 즉, 이메일 상태가 변경되더라도 예상대로 유효성 검사가 실행되지 않을 가능성이 있습니다.
```jsx
const validateEmailHandler = () => {
    setEmailIsValid(emailState.includes('@'));
}
```

#### useReducer
- 언제 useReducer를 사용할까?
  - 상태가 복잡하고, 여러 개의 상태 변화를 관리해야 할 때
  - 상태 업데이트 '로직을 분리'하고 '재사용'하고 싶을 때
  - useState보다 더 구조적인 방식으로 상태를 관리하고 싶을 때
```jsx
const [state, dispatch] = useReducer(reducer, initialArg, init?)
```
- 1. reducer: 상태(state)를 업데이트하는 함수입니다. (state, action) => newState 형식으로 작성됩니다.
- 2. initialArg: 초기 상태 값입니다.
- 3. init? (선택 사항): initialArg을 변환하여 초기 상태를 생성하는 함수입니다.

#### useReducer 기본 사용 예제
```jsx
import { useReducer } from "react";

// 1️⃣ 리듀서 함수 정의 (현재 상태, 액션을 받아 새로운 상태 반환)
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

// 2️⃣ 컴포넌트에서 useReducer 사용
function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })} > + </button>
      <button onClick={() => dispatch({ type: "DECREMENT" })} > - </button>
    </div>
  );
}

export default Counter;
```
```jsx

```
