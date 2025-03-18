## useState

#### useState
- (https://ko.react.dev/reference/react/useState)
- (https://ko.react.dev/learn/state-as-a-snapshot)
- state를 업데이트 해주는 React 라이브러리에서 제공해 주는 빌트인 훅
- 훅(hook) : 리액트 v16.8 버전부터 나온 기능. 함수형 컴포넌트에서만 쓸 수 있는 함수로 리액트의 lifecycle 기능을 연동(hook) 할 수 있음.

#### useState 특징
- 해당 컴포넌트 안에서만 사용을 할 수 있다.
- const [state, setState] = useState(initialState)와 같이 사용

#### useState 주의할 점
- 부모 자식 컴포넌트 구조에서, 스테이트를 부모컴포넌트에 한번만 바꿔줘도 자식 컴포넌트는 '전부 리렌더링' 된다. -> 의도치 않은 효과가 발생할 수 있다.
