# useTitle
- useTitle은 일반적으로 React에서 페이지의 문서 제목(title) 을 동적으로 설정하기 위해 사용하는 커스텀 훅(custom hook) 입니다. 
- 예를 들어, 웹페이지 탭에 나타나는 텍스트를 변경하고 싶을 때 사용됩니다.


### 예시코드
- 이 코드를 사용하면 AboutPage 컴포넌트가 렌더링될 때 브라우저 탭 제목이 'About Us'로 바뀝니다.

#### useTitle.js
```jsx
import { useEffect } from 'react';

function useTitle(title) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    return () => {
      document.title = prevTitle; // 컴포넌트 언마운트 시 원래 제목으로 복원
    };
  }, [title]);
}
```

#### App.js
```jsx
import React from 'react';
import useTitle from './useTitle';

function AboutPage() {
  useTitle('About Us');

  return <h1>소개 페이지입니다</h1>;
}
```
