function usePreventLeave() {
  const listener = (event) => {
    event.preventDefault();     // 일부 브라우저에서는 이 줄은 필요 없을 수도 있음
    event.returnValue = "";     // 브라우저에 경고창 띄우라고 알림
  };

  const enablePrevent = () => {
    window.addEventListener("beforeunload", listener);   // "beforeunload": 페이지가 언로드(unload)되기 바로 직전 발생하는 이벤트
  };

  const disablePrevent = () => {
    window.removeEventListener("beforeunload", listener);
  };

  return { enablePrevent, disablePrevent};
}

export default usePreventLeave

