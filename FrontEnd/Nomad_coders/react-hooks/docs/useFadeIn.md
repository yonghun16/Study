# useFadeIn
- 좋아요! useFadeIn 훅은 **컴포넌트가 마운트될 때 점점 투명도(불투명도)가 증가하면서 자연스럽게 나타나는 효과(fade-in)**를 주기 위한 React 커스텀 훅입니다. 
- 보통 애니메이션을 코드로 재사용하고 싶을 때 만들게 됩니다.


### 🎯 목적
- DOM 요소에 Fade-In 효과를 부여.
- 보통 ref를 반환해서 ref가 연결된 요소에 opacity와 transition 스타일을 적용함.
- 한 번만 실행되는 애니메이션이므로 useEffect가 함께 사용됨.


### 🔧 예시 코드
#### useFadeIn
- useRef()를 통해 DOM 요소를 직접 조작할 수 있게 만듦.
- 초기 opacity는 0, 즉 완전히 투명함.
- useEffect 안에서 transition과 opacity를 설정함으로써 마운트되자마자 부드럽게 나타남.
- 반환 값은 ref와 초기 스타일이 포함된 객체 → JSX에 {...fadeInH1}처럼 쉽게 적용 가능.
```jsx
import { useEffect, useRef } from "react";

function useFadeIn(duration = 1, delay = 0) {
  const element = useRef();

  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, [duration, delay]);

  return {
    ref: element,
    style: { opacity: 0 },
  };
}
```
#### Component
```jsx
import React from "react";
import useFadeIn from "./useFadeIn";

function App() {
  const fadeInH1 = useFadeIn(2, 1); // 2초 동안 fade-in, 1초 지연

  return <h1 {...fadeInH1}>Hello, World!</h1>;
}
```

### ⚠️ 주의사항
- 이 훅은 반드시 DOM 요소에만 사용해야 합니다. React 컴포넌트에는 직접 ref를 달 수 없습니다.
- 애니메이션 라이브러리를 쓰면 더 유연함 (ex: Framer Motion, GSAP). 하지만 useFadeIn은 훨씬 가볍고 간단합니다.
- React 18 이상에서는 strict mode로 인해 useEffect가 두 번 실행되는 환경에서 이상 동작이 없는지 확인 필요.
