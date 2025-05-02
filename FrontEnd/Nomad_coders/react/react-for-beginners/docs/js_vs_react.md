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
    // root 요소 선택 및 변수 선언
    const root = ReactDOM.createRoot(document.getElementById("root"));
    let counter = 0;

    // 카운터 증가 함수
    function countUp() {
      counter = counter + 1;
      render();
    }

    // render 함수
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

    render();
```

### 카운터 React 2
```jsx
    // root 요소 생성
    const root = ReactDOM.createRoot(document.getElementById("root"));

    const App = () => {
      const [counter, setCounter] = React.useState(0)   // counter는 변수 modifier는 수정 함수
      const onClick = () => {
        setCounter(counter + 1);                        // counter 변수 렌더링
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
