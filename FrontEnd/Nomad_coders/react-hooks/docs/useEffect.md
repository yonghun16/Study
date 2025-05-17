# useEffect


### useEffect란?
- useEffect()는 React에서 함수형 컴포넌트가 컴포넌트의 **생명주기(lifecycle)**와 유사한 동작을 수행할 수 있도록 도와주는 Hook입니다. 
- useEffect는 특정 작업(예: 데이터 가져오기, 이벤트 리스너 등록, 타이머 설정 등)을 컴포넌트가 렌더링된 이후에 수행할 수 있게 해줍니다.


### 기본문법
```jsx
useEffect(() => {
  // 실행할 코드 (side effect)
  
  return () => {
    // cleanup 코드 (선택사항)
  };
}, [의존성 배열]);
```

### 용도 (Side Effect란?)
- Side Effect란 컴포넌트의 렌더링 외의 작업을 의미합니다.
- 예를 들어:
  - 서버에서 데이터 가져오기 (fetch)
  - DOM 직접 조작 
  - 구독 설정/해제 (WebSocket, 이벤트 리스너 등)
  - 타이머 설정
  - 로컬 스토리지 접근


### 동작방식
| 의존성 배열             | 실행 타이밍                          |
|-------------------------|--------------------------------------|
| 없음                    | 매번 렌더링 후 실행                  |
| 빈 배열 (`[]`)          | 컴포넌트 마운트 시 1회만 실행        |
| 특정 값 포함 (`[a, b]`) | `a`나 `b` 값이 변경될 때만 실행      |


### ✅ 예제코드

#### 1. 컴포넌트 마운트 시 API 호출
```jsx
useEffect(() => {
  fetchData();
}, []);
```

#### 2. 값이 바뀔 때마다 동작
```jsx
useEffect(() => {
  console.log('count changed:', count);
}, [count]);
```

#### 3. 이벤트 등록 및 정리 (cleanup)
- 실행 흐름 설명
  - useEffect 자체는 컴포넌트가 마운트될 때 단 한 번 실행됩니다. ([] 빈 배열 덕분에)
  - 그 안에서 window.addEventListener('resize', handleResize)가 실행됩니다.
  - 이로 인해, 윈도우 리사이즈 이벤트가 발생할 때마다 handleResize가 실행됩니다.
  - 즉, useEffect가 한 번만 실행된다고 해서 handleResize도 한 번만 실행되는 게 아닙니다.
- 왜 이렇게 사용하는가?
  - 이벤트 리스너는 메모리에 등록되기 때문에, 필요하지 않을 때 제거(cleanup) 해야 메모리 누수나 중복 실행을 방지할 수 있습니다.
  - 그래서 useEffect에서 return을 이용해 정리(cleanup) 함수를 정의합니다.
```jsx
useEffect(() => {
  const handleResize = () => console.log('Resized!');
  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);
```
