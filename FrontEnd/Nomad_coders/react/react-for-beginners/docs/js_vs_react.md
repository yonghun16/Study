# JavaScript vs React (카운터)
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
```jsx
    // root 요소 생성
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
