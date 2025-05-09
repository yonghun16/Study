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
```

### props 전달 및 컴포넌트 확장
```jsx
import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${props => props.bgColor};  // props 수신, props 중에서 bgColor라는 속성 값을 꺼내와서 사용하겠다는 의미
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
```

### 컴폰넌트의 기본 속성 정의
- as = 기존에 만든 스타일 컴포넌트를 다른 HTML 태그로 렌더링
  - 속성은 그대로 쓰고, tag만 바꿀 때 유용
- .attrs({ required: true }): 해당 컴포넌트에 기본 속성(attribute)을 지정. 
  - 다수의 컴포넌트에게 동일한 속성을 사용하고 싶을 때 유용.
```jsx
 styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Input = styled.input.attrs({ required: true })`    // 기본 속성 정의
  background-color: tomato;
`;

function App() {
  return (
    <Father as="header">    // as = 기존에 만든 스타일 컴포넌트를 다른 HTML 태그로 렌더링
      <Input />
      <Input />
      <Input />
    </Father>
  );
}
```

### createGlobalStyle
- 전역 스타일을 정의할 때 사용합니다. 보통 리셋 CSS나 전체 앱에 공통으로 적용되는 폰트, 배경색, 기본 여백 등을 설정할 때 쓰임.
```tsx
// GlobalStyle.ts
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* 리셋 CSS */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* 기본 바디 스타일 */
  body {
    font-family: 'Noto Sans KR', sans-serif;
    background-color: #f9f9f9;
    color: #333;
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, ol {
    list-style: none;
  }
`;

export default GlobalStyle;
```
```tsx
// app.tsx
import React from 'react';
import GlobalStyle from './GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <h1>Hello styled-components</h1>
        <p>전역 스타일이 적용되었습니다.</p>
      </div>
    </>
  );
}

export default App;
```
