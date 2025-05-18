# useRef
- useRef는 React에서 제공하는 Hook 중 하나로, 컴포넌트에서 mutable(변경 가능한) 값을 저장하거나 DOM 요소에 접근할 때 사용됩니다.


### 🔧 기본 문법
- refContainer.current에 실제 값이 저장됩니다.
- 값이 바뀌어도 컴포넌트는 리렌더링되지 않습니다.
```tsx
const refContainer = useRef(initialValue);
```

### 📌 주요 사용 예시
#### 1. DOM 요소에 접근
- inputRef.current는 \<input> DOM 요소를 참조합니다.
- 마치 document.querySelector처럼 쓸 수 있음.
```tsx
import { useRef, useEffect } from "react";

function FocusInput() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return <input ref={inputRef} type="text" />;
}
```

#### 2. 리렌더링 없이 값 저장
- 상태(useState)와 달리 useRef는 값을 변경해도 화면이 다시 그려지지 않음.
- 주로 타이머, 이전 값 저장 등에 사용.
```tsx
function Timer() {
  const count = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      count.current += 1;
      console.log(count.current);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div>Open console to see count</div>;
}
```

3. 이전 상태 기억하기
```tsx
function Count({ value }: { value: number }) {
  const prevValue = useRef<number>();

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  return (
    <div>
      <p>현재 값: {value}</p>
      <p>이전 값: {prevValue.current}</p>
    </div>
  );
}
```
