function useNotification(title, options) {
  // 브라우저가 Notification API를 지원하는지 확인
  if(!("Notification" in window)) {
    return;
  };

  // Notification API를 사용하여 브라우저에 고지사항을 출력
  const fireNotif = () => {
    if(Notification.permission !== "granted") {               // permission이 granted가 아니라면
      Notification.requestPermission().then(permission => {   // permission 변경 요청을 보냄
        if(permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };

  return;
}

export default useNotification
