# JavaScript vs React (카운터)

### 카운터 JS
```js
    // 변수 선언 및 DOM 선택
    let counter = 0;
    const button = document.getElementById("btn");
    const h3 = document.querySelector("h3");

    // 함수 선언
    function handleClick() {
      console.log("clicked");
      counter = counter + 1;
      h3.innerText = `Total Clicks: ${counter}`;
    }

    // 이벤트 렌더링
    button.addEventListener("click", handleClick);
```

### 카운터 React 1
```jsx
    // root 요소 선택
    const root = ReactDOM.createRoot(document.getElementById("root"));

    // 카운터 변수       // -> useState(리액트 Hook)의 state
    let counter = 0;

    // 카운터 증가 함수  // -> useState(리액트 Hook)의 setState
    function countUp() {
      counter = counter + 1;
      render();
    }

    // render 함수       // -> useState(리액트 Hook)의 setState이 변경되면 자동으로 실행되므로 필요 없어짐.
    function render() {
      root.render(<Container />);    // container 렌더링
    }

    // container 요소 생성 (h3 + button)
    const Container = () => (
      <div>
        <h3>Total clicks: {counter}</h3>
        <button onClick={countUp}>Click me</button>
      </div>
    );

    render();    // 초기 렌더링
```

### 카운터 React 2
```jsx
    // root 요소 생성
    const root = ReactDOM.createRoot(document.getElementById("root"));

    const App = () => {
      const [counter, setCounter] = React.useState(0)   // counter는 변수 선언, setCounter는 수정 함수
      const onClick = () => {
        setCounter((prevCounter) => prevCounter + 1);   // counter 변수를 +1하고 counter가 포함된 App 컴포넌트 재랜더링
      };
      return (
        <div>
          <h3>Total clicks: {counter}</h3>
          <button onClick={onClick}>Click me</button>
        </div>
      );
    }

    root.render(<App />);    // App 초기 렌더링
```
#### setCounter((prevCounter) => prevCounter + 1); 사용 이유
- 이 코드는 React의 useState 훅에서 제공하는 setter 함수 (setCounter)가 콜백 함수를 인자로 받을 수 있기 때문에 가능
- React의 상태 업데이트는 비동기적이고, batching(일괄 처리) 되기 때문에 다음과 같은 상황이 발생할 수 있음.
```jsx
    setCounter(counter + 1);
    setCounter(counter + 1);
```
- 위처럼 두 번 연속해서 상태를 업데이트하면, 기대와 달리 counter 값이 2가 아니라 1만 증가할 수 있어요. 이는 counter 값이 업데이트되기 전에 두 줄 모두 같은 이전 상태값을 참조하기 때문
```jsx
    setCounter((prevCounter) => prevCounter + 1);
```
- 그러나 이렇게 하면 React는 이전 상태(prevCounter)를 정확하게 보장된 값으로 전달하기에, 여러분 호출해도 의도한 만큼 정확한 상태로 업데이트 됨.
