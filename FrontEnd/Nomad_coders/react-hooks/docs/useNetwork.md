# useNetwork
- useNetwork 훅은 사용자의 네트워크 상태(온라인/오프라인 여부 등)를 감지하고 그에 따라 반응할 수 있도록 도와주는 React 훅입니다. 
- 이 훅은 보통 브라우저의 navigator.onLine 상태와 online, offline 이벤트를 기반으로 동작합니다.


### 📌 기본 기능
- 현재 사용자가 온라인인지 오프라인인지 확인 가능
- 네트워크 상태가 변경될 때 이벤트를 감지하여 자동 업데이트
- 네트워크 상태에 따라 앱 UI 또는 로직을 다르게 구성 가능


### ✅ 예제 구현
#### useNetwork.tsx
```tsx
import { useState, useEffect } from 'react';

function useNetwork(): boolean {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const updateOnlineStatus = () => {
    setIsOnline(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);

    return () => {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
    };
  }, []);

  return isOnline;
}
```
#### use Component
```tsx
function NetworkStatus() {
  const isOnline = useNetwork();

  return (
    <div>
      <h1>You are currently: {isOnline ? "Online ✅" : "Offline ❌"}</h1>
    </div>
  );
}
```


### 💡 확장 아이디어
- 네트워크 상태 변경시 사용자에게 알림 팝업 띄우기
- 오프라인일 때 자동 저장 기능 구현 (예: localStorage)
- 사용자가 다시 온라인이 되면 자동 동기화 처리

- 필요하다면 react-use 같은 라이브러리에서도 useNetwork 훅을 제공하고 있으니, 직접 구현하지 않고 사용할 수도 있습니다:
  - npm install react-use
  ```tsx
    import { useNetworkState } from 'react-use';

    const { online } = useNetworkState();
  ```
