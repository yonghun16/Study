# React basic

### 기본 엘리멘트 생성
```js
    const rootElement = document.getElementById("root");      // rootElement DOM 선택
    const root = ReactDOM.createRoot(rootElement);            // root 루트를 rootElement DOM에 생성
    const span = React.createElement(                         // span 엘리먼트 생성
      "span",                                                 // type, 어떤 HTML 태그나 컴포넌트인지 (예: 'div', 'span', MyComponent 등)
      {key: "key", id: "sexy-span", style: {color: "red"} },  // props, 해당 요소에 전달할 속성 객체 (예: { className: "box", id: "main" })
      "Total Clicks: 0"                                       // ...children, 자식 요소들 (문자열, 다른 React 요소 등)
    );
    root.render(span);  // 이 span 엘리먼트를 React 루트(root)에 붙여서 실제 DOM으로 렌더링
```
### 예제 1
```js
    // root 요소 생성
    const root = ReactDOM.createRoot(document.getElementById("root"));

    // h3 요소 생성
    const h3 = React.createElement(
      "h3", 
      {
        key: "h3",
        onMouseEnter: () => console.log("mouse entered")
      },
      "Total Clicks: 0"
    );

    // btn 요소 생성
    const btn = React.createElement(
      "button", 
      { 
        key: "btn",
        onClick: () => { console.log("clicked"); } 
      },
      "Click me"); 

    // container 요소 생성 (h3 + btn)
    const container = React.createElement("div", null, [h3, btn]);

    // container 렌더링
    root.render(container);
```

### JSX
- JSX는 JavaScript 코드 안에서 HTML처럼 UI를 작성할 수 있게 해주는 문법.
```js
    const element = React.createElement(
      'h1',
      {className: 'greeting'},
      'Hello, world!'
    )
```
```jsx
    const element = (
      <h1 className="gretting">
        Hello, world!
      </h1>
    )
```

### 예제 2 (jsx)
```jsx
    // root 요소 생성
    const root = ReactDOM.createRoot(document.getElementById("root"));

    // h3 요소 생성
    const h3 = (
      <h3 
        key="h3"
        onMouseEnter={() => console.log("mouse entered")}
      >
        Total Clicks: 0
      </h3>
    );

    // btn 요소 생성
    const btn = (
      <button 
        key="btn"
        onClick={() => console.log("clicked")}
      >
        Click me
      </button>
    );

    // container 요소 생성 (h3 + btn)
    const container = React.createElement("div", null, [h3, btn]);

    // container 렌더링
    root.render(container);
```
