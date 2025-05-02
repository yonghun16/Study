# props

### 자식 컴포넌트와 부모 컴포넌트
```jsx
    // 자식 컴포넌트
    const Btn = ({text, big}) => {              // props 수신
      return (
        <button style={{
          backgroundColor: "tomato",
          color: "white",
          padding: "10px 20px",
          border: "1px solid tomato",
          borderRadius: "15px",
          fontSize: big ? "20px" : "10px"
        }}
        >
          {text}
        </button>
      );
    }
    // 부모 컴포넌트
    const App = () => {
      return (
        <div>
          <Btn text="Save Change" big={true}/>  // props 전달
          <Btn text="Continue" big={false} />   // props 전달
        </div>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App />);
```
