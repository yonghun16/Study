# Type Script

### Type Script
- 자바스크립트에 타입(type)을 추가한 언어
- 정적 타입 검사 (컴파일 타임에 오류 확인)
  - 코드 작성 중에 오타, 잘못된 인자 전달 등 버그를 사전에 잡을 수 있음
- 더 나은 코드 자동완성과 IntelliSense 지원
  - IDE에서 타입 정보를 바탕으로 자동완성, 문서 설명 등을 정확히 제공
- 코드 유지보수 용이
  - 규모가 큰 프로젝트에서 특히 강력함. 협업 시에도 누가 어떤 값을 써야 하는지 명확함.
- ES6+ 문법 지원 + 하위 브라우저 호환 (트랜스파일)
  - 최신 문법을 써도 구버전 브라우저에 맞게 변환됨
```js
function add(a, b) {
  return a + b;
}
add(1, "2"); // 결과: "12" (문자열 덧셈됨)
```

```ts
function add(a: number, b: number): number {
  return a + b;
}
add(1, "2"); // ❌ 오류: string은 number에 전달될 수 없음
```

### propTypes와 TypeScript 차이
- propTypes는 코드를 실행 후 타입 검사
- TypeScript는 코드 작성 시 타입 검사
```tsx
import styled from "styled-components";

interface ContainerProps {    // Container props 타입 정의
  $bgColor: string;
}

const Container = styled.div<ContainerProps>`   // Container 타입 적용
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.$bgColor}; // props 중에서 $bgColor라는 속성을 꺼내와서 사용하겠다는 의미 
  border-radius: 100px;
`;

interface CircleProps {    // Circle props 타입 정의
  bgColor: string;
}

function Circle({ bgColor }: CircleProps) {   // Circle props 타입 적용
  return <Container $bgColor={bgColor} />; 
}

export default Circle;

```
