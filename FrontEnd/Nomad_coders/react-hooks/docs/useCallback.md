# useCallback
- useCallback은 React의 성능 최적화를 위한 훅입니다. 컴포넌트가 다시 렌더링될 때 같은 함수를 새로 생성하지 않고, 기존 함수를 재사용하고 싶을 때 사용합니다.


### 🔧 기본 문법
- useCallback(fn, deps)는 deps 배열 안의 값이 변경되지 않으면 fn을 그대로 재사용합니다.
- deps 값이 바뀌면 새로운 fn을 다시 생성합니다.
```jsx
const memoizedCallback = useCallback(() => {
  // 실행할 로직
}, [dependency1, dependency2]);
```


### 🧠 왜 필요한가?
- JSX 안에서 함수를 정의하면 컴포넌트가 리렌더링될 때마다 새 함수가 만들어집니다.
- 이게 문제가 되는 경우는:
  - 자식 컴포넌트에 props로 전달될 때
  - useEffect 등에서 함수가 deps에 들어갈 때
  - 메모이제이션된 컴포넌트(React.memo)와 함께 쓸 때


### ✅ 먼저 이해해야 할 개념 두 가지
#### 1. JSX 안에서 함수를 정의하면
- 이 함수는 **컴포넌트가 렌더링될 때마다 새롭게 생성**됩니다.
- 자바스크립트의 함수는 **참조값이 바뀌면 새로운 함수**로 인식돼요.
```jsx
const handleClick = () => { ... }
```

#### 2. React는 props가 바뀌면 자식 컴포넌트를 리렌더링하려고 해요
- 그리고 React는 “값이 바뀌었는가?“를 **얕은 비교(shallow comparison)**로 판단합니다.
함수가 같아 보여도, 참조가 다르면 다르게 본다는 뜻입니다.


#### 3. 예제코드
- Parent 컴포넌트가 렌더링될 때마다
- handleClick 함수는 새로 만들어짐 (항상 새로운 참조값)
- Child 컴포넌트는 onClick prop을 받고 있는데,
- 매번 onClick이 다른 함수 참조로 바뀌었다고 판단됨
- 따라서 React는 Child 컴포넌트도 불필요하게 다시 렌더링할 수 있음
```jsx
function Parent() {
  const handleClick = () => {
    console.log("Clicked");
  };

  return <Child onClick={handleClick} />;
}
```


#### 3-1 🔍 예: React.memo와 함께 보면 더 명확
```jsx
const Child = React.memo(({ onClick }) => {
  console.log("🔁 Child 렌더링");
  return <button onClick={onClick}>Click me</button>;
});
```
- 이제 Child는 React.memo 덕분에 props가 바뀌지 않으면 리렌더링되지 않아요.
하지만 Parent에서 매 렌더마다 handleClick이 새로 만들어지면:

```jsx
function Parent() {
  const handleClick = () => {
    console.log("Clicked");
  };

  return <Child onClick={handleClick} />; // 항상 새로운 함수가 props로 전달됨
}
```
- → onClick prop이 매번 바뀌니까 Child는 여전히 계속 리렌더링됨.


#### 4. ✅ 해결: useCallback 사용
- handleClick은 메모이제이션되어 계속 같은 함수 참조를 유지
- Child의 props가 안 바뀌었으므로 리렌더링도 발생하지 않음
```jsx
function Parent() {
  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []); // 빈 배열이면 이 함수는 한 번만 생성됨

  return <Child onClick={handleClick} />;
}
```
#### 5. 🧠 요약
| 개념                   | 설명                                                             |
|------------------------|------------------------------------------------------------------|
| JSX에서 함수 선언      | 렌더링마다 새로 생성되는 **새로운 함수 참조**                    |
| React의 prop 비교      | 참조값이 다르면 "달라졌다고" 판단 → **불필요한 리렌더링 발생**   |
| `useCallback`          | 함수 참조를 **기억해서** 불필요한 리렌더링 **방지**              |


### 📦 useCallback 예제
#### 💥 useCallback 없이
- 매 렌더마다 handleClick 함수가 새로 만들어지고 Child도 리렌더링될 수 있음.
```jsx
function Parent() {
  const handleClick = () => {
    console.log("Clicked");
  };

  return <Child onClick={handleClick} />;
}
```
#### ✅ useCallback으로 최적화
- handleClick은 deps가 변경되지 않는 한 같은 함수 참조를 유지
- Child 컴포넌트는 props가 바뀌지 않으면 불필요한 리렌더링 방지 가능
```jsx
import { useCallback } from "react";

function Parent() {
  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);

  return <Child onClick={handleClick} />;
}
```

### 📌 언제 사용해야 할까?
- ✅ 자식 컴포넌트에 props로 함수를 넘길 때
- ✅ useEffect, useMemo, useRef 등에서 함수 참조가 필요한 경우
- ❌ 무조건적으로 남용하면 메모리만 낭비되고 이득 없음

> 💡 성능 최적화가 눈에 띄게 필요한 경우에만 사용하는 것이 좋습니다.


### 🧪 실습 코드
- 여기서 increment는 매 렌더마다 새로 만들어지지 않고 재사용됩니다.
```jsx
import { useState, useCallback } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```
