import styled, { keyframes } from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
  font-size: 1.5em;
  text-align: center;
`;

const Wrapper = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.backgroundColor};
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`

function App() {
  return (
    <Wrapper>
      <Title>Styled Components</Title>
    </Wrapper>
  );
}

export default App;
