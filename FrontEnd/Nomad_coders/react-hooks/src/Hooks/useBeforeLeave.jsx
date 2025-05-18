import { useEffect } from "react"

function useBeforeLeave(onBefore) {
  if (typeof onBefore !== "function") {
    return;
  }

  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {               // 마우스 포인터가 화면 맨 위 좌표를 넘으면
      onBefore();
    }
  };

  useEffect(() => {
    document.addEventListener("mouseleave", handle)

    return () => {
      document.removeEventListener("mouseleave", handle)
    }
  }, []);
}

export default useBeforeLeave
