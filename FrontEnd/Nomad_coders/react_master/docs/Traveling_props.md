# Travling props


### Travling props?
- “Traveling props“는 React 공식 개념은 아니지만, 커뮤니티나 개발자들 사이에서 컴포넌트 계층 구조를 따라 props를 깊게 전달하는 패턴을 비유적으로 말할 때 종종 사용됨.
- 부모 → 자식 → 손자 → 증손자 식으로, 중간 컴포넌트가 실제로 사용하지 않는 props를 계속 전달(pass down)하는 상황을 뜻함.


### Travling props 예제
```tsx
// 최상위 컴포넌트
function App() {
  const user = { name: "Alice" };
  return <Parent user={user} />;
}

function Parent({ user }: { user: { name: string } }) {
  return <Child user={user} />;
}

function Child({ user }: { user: { name: string } }) {
  return <GrandChild user={user} />;
}

function GrandChild({ user }: { user: { name: string } }) {
  return <div>Hello, {user.name}!</div>;
}
```

### 문제점
- 중간 컴포넌트가 불필요하게 더러워짐
- 컴포넌트 재사용성이 떨어짐
- 리팩토링이나 유지보수 시 데이터 흐름을 파악하기 어려움


### 해결방법
- Context API 사용하기
  - 공통 상태를 여러 하위 컴포넌트가 필요로 한다면 Context를 사용하여 전역처럼 접근할 수 있게 합니다.
- 상태 관리 라이브러리 사용 (Redux, Recoil 등)
  - 더 큰 앱에서는 전역 상태 관리 도구를 활용하는 것이 효과적입니다.
