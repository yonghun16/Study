# react-halmet-async

```bash
npm install react-helmet-async
```

### react-halmet-async
- react-helmet-async는 react-helmet의 권장 대체 라이브러리입니다. 
- Strict Mode에서도 안전하게 작동합니다.

#### React-helmet-async 예제
```tsx
// App.tsx
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <YourAppComponents />
    </HelmetProvider>
  );
}
```
```tsx
// Inside any component
import { Helmet } from 'react-helmet-async';

<Helmet>
  <title>Your Page Title</title>
</Helmet>
```
