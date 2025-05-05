# styled_components

### styled_components
- styled-components는 React에서 스타일을 작성할 수 있게 해주는 CSS-in-JS 라이브러리
- JavaScript 파일 안에서 CSS를 직접 작성하고, 이를 컴포넌트처럼 사용할 수 있게 해줌.

#### 특징
- 컴포넌트 기반 스타일링 : 각 컴포넌트에 고유한 스타일을 부여할 수 있어 스타일이 다른 컴포넌트에 영향을 주지 않음.
- JavaScript 문법 사용 : 조건부 스타일링, props 기반 스타일링 등 JavaScript의 기능을 스타일에 자연스럽게 활용 가능.
- 자동 클래스명 생성 : styled-components는 스타일마다 고유한 클래스를 자동으로 생성해줌 → 클래스명이 겹칠 걱정 없음.

### 기본 사용법
- div 투성이인 render 코드에 비해 관리가 편함.
```jsx
import styled from "styled-components";

const Father = styled.div`    // 부모 div 요소 style
  display: flex;
`;

const BoxOne = styled.div`    // 자식1 div 요소 style
  background-color: teal;
  width: 100px;
  height: 100px;
`;

const BoxTwo = styled.div`    // 자식2 div 요소 style
  background-color: tomato;
  width: 100px;
  height: 100px;
`;

const Text = styled.span`
  color: white;
`;

function App() {
  return (
    <Father>
      <BoxOne>              // 자식1 box
        <Text>test</Text>
      </BoxOne>
      <BoxTwo />            // 자식2 box
    </Father>
  );
}

export default App;
```

### props 전달 및 컴포넌트 확장
```jsx
import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${props => props.bgColor};  // props 수신
  width: 100px;
  height: 100px;
`;

const Circle = styled(Box)`   // 컴포넌트 확장
  border-radius: 50px;
`;

function App() {
  return (
    <Father>
      <Box bgColor="teal" />  // props 송신
      <Circle bgColor="whitesmoke" />
    </Father>
  );
}

export default App;
```
