# Theme

### Theme
- 앱 전체에서 일관된 스타일을 적용할 수 있도록 도와주는 전역 스타일 객체

#### Theme의 구조
```jsx
// theme.js
export const theme = {
  colors: {
    primary: '#0070f3',
    secondary: '#1db954',
    background: '#f4f4f4',
  },
  fontSize: {
    small: '12px',
    medium: '16px',
    large: '20px',
  },
};

```

#### ThemeProvider로 적용
```jsx
// App.jsx
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import MyComponent from './MyComponent';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MyComponent />
    </ThemeProvider>
  );
}
```

#### styled-components에서 사용
- styled-component에서 ThemeProvider로 전달받은 Theme를 사용 가능
```jsx
// MyComponent.js
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.medium};
`;

export default function MyComponent() {
  return <Button>Click me</Button>;
}
```
