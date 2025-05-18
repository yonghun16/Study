# usePreventLeave
- usePreventLeave 훅은 사용자가 페이지를 벗어나거나 새로고침하려고 할 때 이를 막고, 경고 메시지를 표시하고 싶을 때 사용합니다.
- 예를 들어, 폼 작성 중인 데이터를 실수로 날리는 것을 방지하고 싶은 경우 유용합니다.


### 주요 기능
- 브라우저의 beforeunload 이벤트를 활용
- window.confirm 또는 브라우저 기본 경고창으로 사용자에게 경고
- React 컴포넌트에서 간단히 on/off 가능


### 기본 예제 (React + TypeScript)
#### usePreventLeave.ts
```ts
// usePreventLeave.ts
import { useEffect } from 'react';

export function usePreventLeave(shouldPrevent: boolean) {
  useEffect(() => {
    const listener = (event: BeforeUnloadEvent) => {
      if (!shouldPrevent) return;
      event.preventDefault();
      event.returnValue = ''; // 대부분의 브라우저에서 필수
    };

    window.addEventListener('beforeunload', listener);
    return () => {
      window.removeEventListener('beforeunload', listener);
    };
  }, [shouldPrevent]);
}
```

#### FormPage
```tsx
import React, { useState } from 'react';
import { usePreventLeave } from './usePreventLeave';

export default function FormPage() {
  const [isDirty, setIsDirty] = useState(false);

  usePreventLeave(isDirty);

  return (
    <form>
      <textarea
        onChange={() => setIsDirty(true)}
        placeholder="입력하세요..."
      />
      <button type="submit" onClick={() => setIsDirty(false)}>
        제출
      </button>
    </form>
  );
}
```


### ✅ 더 강력한 개선점
- React Router를 사용하는 경우에는 내부 라우팅 감지도 필요
- 그 경우에는 useNavigate, useBlocker, usePrompt와 조합 가능 (React Router v6 이상에서 custom block 기능이 제한됨)


### ✅ 브라우저 동작 제한 사항
- beforeunload는 브라우저 보안 정책으로 인해 커스텀 메시지 표시가 제한됨 (모든 브라우저가 무시하거나 기본 메시지를 강제로 사용)
- 메시지를 커스터마이징하고 싶다면 내부 라우팅 감지 + 커스텀 모달로 구현해야 함
