## memo

#### memo
- React.memo는 React의 컴포넌트의 불필요한 리렌더링을 방지하는 역할을 함.
- React.memo를 사용하면, props가 변경되지 않는 한 해당 컴포넌트는 다시 렌더링되지 않음.

#### Usage
- value가 변경되지 않을 경우 컴포넌트는 다시 렌더링되지 않습니다.
```jsx
import React from "react";

const MyComponent = ({ value }) => {
  console.log("MyComponent 렌더링됨!");
  return <div>{value}</div>;
};

export default React.memo(MyComponent);
```

#### 주의 할 점 
- '객체', '함수', 'props'를 넘길 때 리렌더링이 발생할 수 있음.
- 상태(state)가 변경되면 결국 리렌더링됨
- React.memo는 props 바뀌기 전, 후 snapshot을 기억해야 해서 연산 필요
- Props가 그대로인 것처럼 보여도 새롭게 함수가 생성되어 re-rendering이 발생하는 경우가 있다.
