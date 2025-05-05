# Animation

### animation && selector
```jsx
``import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`

const Emoji = styled.span`     // 선택자 정의
  font-size: 5rem;
`;

const animation = keyframes`   // 애니메이션 정의
  0% {
    transform: rotate(0deg);
    border-radius: 0%;
  }
  50% {
    transform: rotate(360deg);
    border-radius: 50%;
  }
  100% {
    transform: rotate(0deg);
    border-radius: 0%;
  }
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${animation} 2s linear infinite;   // 애니메이션 적용
  ${Emoji} {                                    // 선택자 적용
    font-size: 3rem;
    &:hover {
      cursor: pointer;
      font-size: 4rem;
    }
    &:active {
      opacity: 0;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji as="div">😀</Emoji>              // div 태그로 바뀌어도 Box에서 정한 속성 사용 가능
      </Box>
      <Emoji>🥰</Emoji>
    </Wrapper>
  );
}

export default App;
`
