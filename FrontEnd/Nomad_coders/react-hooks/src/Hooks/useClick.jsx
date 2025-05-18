import { useEffect, useRef } from "react"

export default function useClick(onClick) {
  const element = useRef();
  
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);     // ref로 참조된 DOM에 onClick라는 이벤트 실행
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick); // 이벤트 리스너 제거
      }
    };
  }, []);

  return element;
}

