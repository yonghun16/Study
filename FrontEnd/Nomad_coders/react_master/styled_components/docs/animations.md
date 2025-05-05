# Animation

### animation
```jsx
import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
`

const animation = keyframes`                    // 애니메이션 정의
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
  span {                                        // 내부 요쇼 스타일 적용
    font-size: 3rem;
    &:hover {
     cursor: pointer;
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
        <span>😀</span>
      </Box>
    </Wrapper>
  );
}

export default App;
```
