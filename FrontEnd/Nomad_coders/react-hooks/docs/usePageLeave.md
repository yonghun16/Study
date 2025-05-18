# usePageLeave
- usePageLeave는 사용자가 웹 페이지를 떠나려 할 때(예: 마우스 커서를 브라우저 상단으로 이동하는 등의 행동) 이를 감지해서 특정 작업을 수행할 수 있도록 해주는 React hook입니다.
- 일반적으로는 마케팅, 데이터 저장, 또는 사용자 행동 분석에 사용됩니다.
- 이 훅은 보통 react-use 라이브러리에 포함되어 있으며, 다음과 같은 형태로 사용됩니다:
  - npm install react-use


### ✅ 기본 사용 예시 (react-use)
```tsx
import { usePageLeave } from 'react-use';

function MyComponent() {
  usePageLeave(() => {
    console.log('User is leaving the page!');
    // 예: 서버에 로그 전송, 팝업 표시 등
  });

  return <div>페이지를 떠나기 전에 메시지를 띄우고 싶어요!</div>;
}
```

### 🔍 작동 방식

- usePageLeave는 다음과 같은 이벤트를 기반으로 작동합니다:
  - 마우스가 뷰포트의 위쪽을 벗어날 때 (mouseleave)
  - 문서에서 포커스를 잃을 때 (blur)는 사용하지 않지만, 마우스 커서 위치만 추적
- 즉, “떠날 가능성이 높다”는 힌트를 얻는 용도로 사용되며, 실제 페이지를 닫는 건 막지 못합니다. 하지만 그 전에 데이터를 저장하거나, 사용자 설문을 띄우는 등의 작업은 할 수 있습니다.


### 🎯 사용 목적
- 사용자가 떠나기 직전에 피드백 요청
- 장바구니에 상품이 남아 있는 경우 리마인더 팝업
- 자동 저장 또는 세션 유지
- 마케팅 캠페인 표시


### ⚠️ 주의사항
- 모바일 기기에서는 mouseleave가 동작하지 않으므로 신뢰도가 낮습니다.
- 사용자 경험을 해치지 않도록 지나치게 방해하는 팝업은 피하는 것이 좋습니다.
- 크롬이나 다른 브라우저에서 보안상 제한되는 행동 (예: 자동 알림, confirm 등)은 허용되지 않을 수 있습니다.


### ✅ 직접 구현 예시 (의존성 없이)
```tsx
import { useEffect } from 'react';

export function usePageLeave(callback: () => void) {
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        callback();
      }
    };

    document.addEventListener('mouseout', handleMouseLeave);
    return () => {
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, [callback]);
}
```

