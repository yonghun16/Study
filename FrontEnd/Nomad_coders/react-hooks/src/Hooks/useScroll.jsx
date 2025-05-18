import { useEffect, useState } from "react";

function useScroll() {
  const [scrollPosition, setScrollPosition] = useState({
    x: 0,
    y: 0
  });

  const onScroll = () => {
    console.log("y :", window.scrollY, " x :", window.scrollX);
    setScrollPosition({
      x: window.scrollX,
      y: window.scrollY
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    }
  }, []);

  return scrollPosition;
}

export default useScroll
