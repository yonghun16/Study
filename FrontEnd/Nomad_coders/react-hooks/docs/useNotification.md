# useNotification
- useNotification 훅은 웹 브라우저의 Notification API를 활용해 사용자가 브라우저 알림을 받을 수 있게 해주는 커스텀 훅입니다.
- 이 훅을 사용하면 React 컴포넌트에서 간단하게 알림을 띄울 수 있습니다.
- https://developer.mozilla.org/ko/docs/Web/API/Notifications_API


### 🔔 Notification API란?
- 브라우저에서 사용자에게 시스템 알림(토스트처럼 화면 바깥에 표시되는 메시지)을 보낼 수 있는 API입니다. 
- 사용자 권한을 요청하고, 승인되면 알림을 보여줄 수 있습니다.


### ✅ 예제: useNotification 훅 코드
#### useNotification
```jsx
function useNotification(title, options) {
  // 브라우저가 Notification API를 지원하는지 확인
  if (!("Notification" in window)) {
    return () => console.log("This browser does not support notifications.");
  }

  const fireNotification = () => {
    if (Notification.permission === "granted") {
      new Notification(title, options);
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          new Notification(title, options);
        }
      });
    }
  };

  return fireNotification;
}
```
#### useing Component
```jsx
import React from "react";
import useNotification from "../hooks/useNotification";

function NotificationComponent() {
  const triggerNotif = useNotification("Hello!", {
    body: "This is a browser notification 😄",
    icon: "https://cdn-icons-png.flaticon.com/512/753/753345.png"
  });

  return (
    <button onClick={triggerNotif}>
      Show Notification
    </button>
  );
}

export default NotificationComponent;
```


### 📌 주의사항
- HTTPS에서만 동작합니다 (로컬에서는 localhost 예외).
- 사용자가 최초에 권한을 허용해야 알림이 작동합니다.
- 알림은 보통 백그라운드 탭에서 유용합니다.


### 🚀 확장 아이디어
- 자동 푸시 취소 (setTimeout으로 notification.close() 호출)
- service worker와 연동해 푸시 알림 구현
- 사용자 설정에 따라 알림 종류 구분 (에러, 성공 등)
