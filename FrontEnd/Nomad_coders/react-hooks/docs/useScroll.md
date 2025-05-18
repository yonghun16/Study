# useScroll
- useScroll 훅은 주로 리액트(React) 환경에서 스크롤 위치나 스크롤 이벤트를 추적하고자 할 때 사용되는 커스텀 훅입니다. 
- 이 훅은 브라우저의 scroll 이벤트를 감지해서 현재 스크롤 위치(top, left 등)를 상태로 관리할 수 있도록 도와줍니다.
- 리액트에서는 공식적으로 제공되지는 않지만, 여러 라이브러리에서 제공하거나 직접 구현해서 사용하는 방식입니다. 


### ✅ 주요 목적
- 사용자의 스크롤 위치를 추적 (예: window.scrollY, element.scrollTop)
- 스크롤 기반 애니메이션/이벤트 실행 (예: header 고정, fade-in 효과)
- 무한 스크롤, lazy loading 트리거


### ✅ 간단한 구현 예시
#### useScroll.tsx
```jsx
import { useState, useEffect } from "react";

function useScroll() {
  const [scrollPosition, setScrollPosition] = useState({
    x: window.scrollX,
    y: window.scrollY,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition({
        x: window.scrollX,
        y: window.scrollY,
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollPosition;
}
```
#### useing Component
```jsx
function MyComponent() {
  const { x, y } = useScroll();

  return (
    <div>
      <p>스크롤 위치: X={x}, Y={y}</p>
    </div>
  );
}
```

### ✅ 요소 기준으로 추적하고 싶다면?
- 특정 DOM 요소의 스크롤을 추적하려면 ref를 이용해서 구현할 수 있습니다.
```jsx
function useElementScroll(ref) {
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      setScrollPosition({
        x: element.scrollLeft,
        y: element.scrollTop,
      });
    };

    element.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      element.removeEventListener("scroll", handleScroll);
    };
  }, [ref]);

  return scrollPosition;
}
```


### 📦 관련 라이브러리
- framer-motion의 useScroll 훅: 애니메이션용으로 정교하게 구성됨
- react-use 라이브러리의 useScroll
- react-intersection-observer: 스크롤 진입 여부 감지용
- 필요한 목적(예: 무한 스크롤, 특정 요소 감지 등)에 따라 다양하게 설계 가능

