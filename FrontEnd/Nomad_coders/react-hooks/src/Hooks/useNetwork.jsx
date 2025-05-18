import { useEffect, useState } from "react";

function useNetwork(onChange) {
  const [status, setStatus] = useState(navigator.onLine);    // navigator.onLine: 연결 상태 -> boolean

  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  }

  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);

    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    }
  }, []);
  return status;
}

export default useNetwork
