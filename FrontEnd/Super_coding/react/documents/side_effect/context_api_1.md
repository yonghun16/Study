## context API 1

#### Context API란?
- React의 Context API는 주로 전역 상태 관리를 위해 사용됨.

#### Context API를 쓰는 이유
> props drilling <br />  
> - 컴포넌트 트리에서 부모 → 자식 → 손자 → 그 이하 컴포넌트로 props를 계속 전달해야 하는 문제 <br />
- 간단한 전역 상태 관리를 제공함. 
  - -> 인증정보, 다크모드, 테마설정 등 전역 정보 관리, props drilling 방지
- 리렌더링을 최적화할 수 있는 방법 제공. 
  - -> useMemo, useReducer와 함께 사용하여 불필요한 전체 렌더링을 예방
- 규모가 크고 복잡한 프로젝트에서는 Redux 같은 라이브러리가 필요할 수 있지만, 소규모 프로젝트나 특정 상태 관리에는 Context API만으로 충분.

#### Context API 기본 사용법
```jsx
// Context 생성
const ThemeContext = createContext();

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ChildComponent />
    </ThemeContext.Provider>
  );
}

// 중간 컴포넌트에서 props를 전달할 필요 없음
function ChildComponent() {
  return <GrandChildComponent />;
}

function GrandChildComponent() {
  const theme = useContext(ThemeContext);
  return <p>현재 테마: {theme}</p>;
}
```
