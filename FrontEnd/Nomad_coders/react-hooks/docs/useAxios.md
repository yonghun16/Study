# useAxios
- useAxios는 React에서 Axios 라이브러리를 활용해 HTTP 요청을 간편하게 수행하도록 만든 커스텀 훅입니다. 서버와 통신하는 로직을 재사용하고 관리하기 쉽게 해줍니다.
- https://axios-http.com/


### 🧠 기본 개념
- useAxios 훅은 일반적으로 다음 기능을 포함합니다:
  - 요청 상태 관리 (loading, error, data)
  - 자동 또는 수동 요청(trigger 방식)
  - Axios 설정 공유 (base URL, 헤더 등)

### ✅ 기본 버전 예시: useAxios
```jsx
import { useState, useEffect } from "react";
import axios from "axios";

function useAxios(config, options = { manual: false }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(!options.manual);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios(config);
      setData(response.data);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!options.manual) {
      fetchData();
    }
  }, []); // 의존성 없음 → 한 번만 실행

  return { data, loading, error, refetch: fetchData };
}

export default useAxios;
```

### Component 
```jsx
import React from "react";
import useAxios from "../hooks/useAxios";

function Users() {
  const { data, loading, error, refetch } = useAxios({
    url: "https://jsonplaceholder.typicode.com/users",
    method: "GET",
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>User List</h2>
      <button onClick={refetch}>Refetch</button>
      <ul>
        {data.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
```


### ⚙️ 확장 아이디어
- Axios 인스턴스를 받아서 전역 설정 적용 (e.g. 토큰)
- cancelToken으로 요청 취소
- debounce 또는 polling
- POST, PUT, DELETE 요청 지원
