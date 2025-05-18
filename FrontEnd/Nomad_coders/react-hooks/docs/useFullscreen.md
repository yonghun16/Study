# useFullscreen
- useFullscreen 훅은 React에서 특정 DOM 요소를 전체 화면(Fullscreen) 모드로 전환하거나 해제할 수 있도록 도와주는 커스텀 훅입니다. 
- 이 훅은 브라우저의 Fullscreen API를 래핑(wrap)해서, 리액트 스타일로 편리하게 사용할 수 있게 해줍니다.


### 🔧 기본 기능
- useFullscreen 훅은 일반적으로 다음과 같은 기능을 제공합니다:
  - 특정 요소를 전체 화면 모드로 전환
  - 전체 화면 모드를 종료
  - 현재 전체 화면 모드인지 여부 확인
  - 전체 화면 상태가 변경되었을 때의 콜백 처리


### 📦 예시 구현
#### useFullscreen.tsx
```tsx
import { useRef, useCallback, useEffect, useState } from 'react';

export function useFullscreen() {
  const elementRef = useRef<HTMLElement | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // 전체 화면
  const enterFullscreen = useCallback(() => {
    const el = elementRef.current;
    if (el && el.requestFullscreen) {
      el.requestFullscreen();
    }
  }, []);

  // 전체 화면 종료
  const exitFullscreen = useCallback(() => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  }, []);

  // 전체 화면 모드 전환
  const toggleFullscreen = useCallback(() => {
    if (document.fullscreenElement) {
      exitFullscreen();
    } else {
      enterFullscreen();
    }
  }, [enterFullscreen, exitFullscreen]);

  useEffect(() => {
    const handleChange = () => {
      setIsFullscreen(!!document.fullscreenElement);  // !! 사용이유 : 값을 불리언(boolean) 타입으로 명확하게 변환하기 위해서
    };

    document.addEventListener('fullscreenchange', handleChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleChange);
    };
  }, []);

  return {
    elementRef,
    isFullscreen,
    enterFullscreen,
    exitFullscreen,
    toggleFullscreen,
  };
}
```

### Fullscreen Component
```tsx
import React from 'react';
import { useFullscreen } from './useFullscreen';

const FullscreenComponent = () => {
  const {
    elementRef,
    isFullscreen,
    toggleFullscreen
  } = useFullscreen();

  return (
    <div>
      <div
        ref={elementRef}
        style={{ width: 300, height: 200, background: '#ccc' }}
      >
        Fullscreen 영역
      </div>
      <button onClick={toggleFullscreen}>
        {isFullscreen ? '전체 화면 종료' : '전체 화면'}
      </button>
    </div>
  );
};
```


### ✅ 장점
- Fullscreen API를 직접 다루지 않고도 간단하게 사용 가능
- 상태 추적이 가능 (isFullscreen)
- 사용자 정의 훅으로 다른 컴포넌트에서도 재사용 가능


### 💡 참고 사항
- iOS Safari는 Fullscreen API를 공식적으로 지원하지 않습니다.
- 사용자 동작(버튼 클릭 등)을 통해서만 fullscreen 진입이 가능하며, 자동 전환은 보안상 제한됩니다.
- React-Use 라이브러리의 useFullscreen 훅도 참고할 수 있으며, 직접 구현보다 더 많은 브라우저 대응과 기능이 포함되어 있습니다.

