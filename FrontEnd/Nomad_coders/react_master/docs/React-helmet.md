# React-helmet

```bash
npm install react-helmet
npm install --save @types/react-helmet
```

### React-helmet
- React 앱에서 \<head> 태그 내용을 동적으로 관리할 수 있도록 도와주는 라이브러리

### React-helmet 예제
```tsx
import { Helmet } from "react-helmet";

function MyPage() {
  return (
    <div>
      <Helmet>
        <title>My Page Title</title>
        <meta name="description" content="This is the description of my page." />
        <link rel="canonical" href="https://example.com/mypage" />
      </Helmet>
      <h1>Welcome to My Page</h1>
    </div>
  );
}
```
