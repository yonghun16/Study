## useEffect

> https://ko.react.dev/reference/react/useEffect

#### 사이드 이펙트
- React의 **side effect(부작용)**는 컴포넌트의 렌더링 과정과 직접적인 관련이 없는 코드 실행을 의미함. 
- 예를 들어, 데이터 가져오기(Fetching Data), DOM 조작, 타이머 설정, 구독(subscription) 등이 사이드 이펙트에 해당.

#### 사이드 이펙트
- 리액트의 기본적인 사이클
  - [UI 렌더링] -> [사용자 Input에 반응(props,state)] -> [리렌더링]
- 기본적인 리액트의 사이클을 벗어나는 동작이 발생한다면?
  - 즉 렌더링 과정과 독립적으로 발생하는 동작이 있다. 
  - Fetching Data, 구독, 타미어 설정 등등 이런 동작들을 'Side Effect'라 부른다.

#### 사이드 이펙트
- 검색 창 자동완성 기능 (예시)
```text
* 'ㄱ'입력 -> onChange 이벤트 리스너 & 핸들러  ->  리렌더링1 ('ㄱ'을 표시함.)
            HTTP Request ↓↑ HTTP Response              ↓
                        서버                  리렌더링2 ('ㄱ' 밑의 리스트를 표시함.)
```
- 렌더링이 2번 생김. 어느 렌더링이 먼저 실행되는지 알 수 없음.
  - 네트워크 상황이 빠르면 2가 빠를수도 있음
  - 리렌더링1과 리렌더링2의 속도 조절이 필요함. 

#### useEffect hook
- 첫 번째 인자 : 매 순간 dependencies가 바뀔 때마다, 이 함수가 실행이 된다.
- 두 번째 인자 : 첫 번째 인자 함수를 매번 실행을 시켜줘야하는 의존하는 값을 배열로 넣는다.
```jsx
function MyComponent() {
    useEffect(() => {...

    }, [dependencies])
}
```

#### useEffect로 이펙트 관리
- 마운트 시 한 번만 실행 (초기 렌더 시)
```jsx
useEffect(() => {
    console.log("컴포넌트가 마운트됨!");
}, []);        // 빈 배열을 전달하면 최초 마운트 시 한 번 실행
```
- 특정 상태(state) 변경 시 실행
```jsx
useEffect(() => {
    console.log("count가 변경됨!");
}, [count]);   // count 값이 변경될 때마다 실행
```
- 언마운트 시 정리(clean-up) 작업 수행
```jsx
useEffect(() => {
    console.log("count가 변경됨!");
}, [count]);   // count 값이 변경될 때마다 실행
```
