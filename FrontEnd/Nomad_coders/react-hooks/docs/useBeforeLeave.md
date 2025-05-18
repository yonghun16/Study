# useBeforeLeave
- useBeforeLeave 훅은 usePageLeave와 비슷하지만 더 명확하게 사용자가 페이지를 떠나려는 순간을 감지하는 데에 특화되어 있습니다.
- 특히 마우스가 브라우저의 위쪽 영역을 벗어날 때만 반응하는 점에서 차이가 있습니다.

- 이 훅은 framer-motion의 유틸인 use-before-leave 또는 일부 커스텀 훅 라이브러리에서 제공되는 형태로 사용됩니다. 
- 보통 mouseout 이벤트를 사용하여 구현되며, 의도는 “사용자가 탭을 닫거나 주소창을 클릭하려는 순간”을 포착하는 것입니다.


### 🔍 useBeforeLeave vs usePageLeave 차이

| 항목             | `usePageLeave`                   | `useBeforeLeave`                          |
|------------------|----------------------------------|-------------------------------------------|
| 라이브러리 예    | `react-use`                      | `usehooks-ts` 또는 커스텀                 |
| 이벤트 감지 방식 | `mouseout`, `clientY <= 0` 등    | 보통 마우스가 페이지 윗부분을 벗어날 때   |
| 모바일 지원      | 거의 없음                        | 거의 없음                                 |
| 목적             | 페이지 이탈 직전 힌트 감지       | 상단 이탈 시 경고/작업 실행               |
| 유연성           | 비교적 높음                      | 더 제한적 (특정 위치)                     |


### ✅ 예시 (커스텀 useBeforeLeave 구현)
#### useBeforeLeave
```tsx
import { useEffect } from 'react';

export function useBeforeLeave(callback: () => void) {
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // 마우스가 브라우저 위쪽으로 나가는 경우만 감지
      if (e.clientY <= 0) {
        callback();
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [callback]);
}
```
#### 사용 예 (Component)
```tsx
function Component() {
  useBeforeLeave(() => {
    console.log("👋 떠나기 전에 뭔가를 하자!");
  });

  return <div>마우스를 브라우저 위로 올려보세요.</div>;
}
```
