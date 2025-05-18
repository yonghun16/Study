# useClick
- useClick이라는 이름의 훅(Hook)은 React 생태계에서 자주 사용되지만, React 공식 API에는 포함되어 있지 않은 커스텀 훅입니다. 주로 클릭 이벤트를 핸들링하는 데 사용되며, 다음과 같은 목적으로 구현됩니다:
- 컴포넌트 외부 클릭 감지 (e.g., 모달, 드롭다운 닫기)
  - 한 번만 클릭 이벤트 처리 (e.g., debounce, throttle)
  - 특정 요소 클릭 핸들링 로직 캡슐화

### 1. 가장 일반적인 형태: 외부 클릭 감지용 useClickOutside
#### useClickOutside
```tsx
import { useEffect, useRef } from "react";

export function useClickOutside(callback: () => void) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [callback]);

  return ref;
}
```
#### app.tsx
```tsx
function Modal({ onClose }) {
  const modalRef = useClickOutside(onClose);

  return (
    <div ref={modalRef} className="modal">
      Modal Content
    </div>
  );
}
```

### 2. 단순 클릭 감지 훅 (useClick) : 특정 DOM 요소에 클릭 이벤트만 바인딩하고 싶을 때
#### useClick
```tsx
import { useRef, useEffect } from "react";

export function useClick(onClick: () => void) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleClick = () => onClick();
    const node = ref.current;

    if (node) {
      node.addEventListener("click", handleClick);
    }

    return () => {
      if (node) {
        node.removeEventListener("click", handleClick);
      }
    };
  }, [onClick]);

  return ref;
}
```
#### app.tsx
```tsx
function Button() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  const buttonRef = useClick(handleClick);

  return <button ref={buttonRef}>Click Me</button>;
}
```
