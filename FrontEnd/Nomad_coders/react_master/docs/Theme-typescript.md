# Theme-typescript.md

#### Theme의 구조
```jsx
// theme.ts
import { DefaultTheme } from "styled-components";

export const lightTheme:DefaultTheme = {
  textColor: "#262626",
  bgColor: "#ffffff",
  btnColor: "blue",
}

export const darkTheme:DefaultTheme = {
  textColor: "#ffffff",
  bgColor: "#262626",
  btnColor: "yellow",
}

```

#### ThemeProvider로 적용
```tsx
// index.tsx
import { ThemeProvider } from 'styled-components';
import App from './App';
import { lightTheme, darkTheme } from './theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
```

#### styled-components에서 사용
- ThemeProvider로 전달받은 Theme를 사용 가능
```tsx
// App.tsx
import styled from 'styled-components';

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;
const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

function App() {

  return (
    <Container>
      <H1>hello</H1>
    </Container>
  );
}

export default App;
```
