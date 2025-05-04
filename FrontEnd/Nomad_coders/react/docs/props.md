# props

### props 전달
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

### props를 통해 이벤트 발생시키기
```jsx
    // 자식 컴포넌트
    const Btn = ({text, changeValue}) => {              // props 수신
      return (
        <button style={{
          backgroundColor: "tomato",
          color: "white",
          padding: "10px 20px",
          border: "1px solid tomato",
          borderRadius: "15px",
        }}
        onClick={changeValue}                           // onclick 이벤트 정보 수신, 이벤트가 발생하면, 부모 컴포넌트의 onclick 함수를 실행
        >
          {text}
        </button>
      );
    }
    // 부모 컴포넌트
    const App = () => {
      const [value, setValue] = React.useState("Save Change");
      const changeValue = () => {                                   // changeValue 이벤트 선언
        setValue("Continue");                                       // value state를 변경
      }
      return (
        <div>
          <Btn text={value} onclick={changeValue}/>                 // props로 changeValue 이벤트 정보 전달
          <Btn text="Continue1" />
        </div>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App />);
```

### 메모이제이션 처리
```jsx
    // 자식 컴포넌트
    const Btn = ({text, onClick}) => {
      console.log(text, "was rendered");
      return (
        <button style={{
          backgroundColor: "tomato",
          color: "white",
          padding: "10px 20px",
          border: "1px solid tomato",
          borderRadius: "15px",
        }}
        onClick={onClick}
        >
          {text}
        </button>
      );
    }
    // 부모 컴포넌트
    const MemoizedBtn = React.memo(Btn);   // btn 컴포넌트를 메모이제이션 처리
    const App = () => {
      const [value, setValue] = React.useState("Save Change");
      const changeValue = () => {
        setValue("Change Value");
      }
      return (
        <div>
          <MemoizedBtn text={value} onClick={changeValue}/>   {/* 메모이제이션 처리된 컴포넌트 사용 */}
          <MemoizedBtn text="Continue" />
        </div>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App />);
```

### propType
#### 설치
```bash
npm install prop-types
```

#### 기본 사용법
```jsx
import PropTypes from 'prop-types';

const MyComponent = ({ name, age }) => {
  return <div>{name} is {age} years old</div>;
};

MyComponent.propTypes = {
  name: PropTypes.string,   // name은 문자열이어야 함
  age: PropTypes.number     // age는 숫자여야 함
};
```

#### 필수 값 지정
```jsx
MyComponent.propTypes = {
  name: PropTypes.string.isRequired, // 필수 prop
  age: PropTypes.number
};
```

#### 레퍼런스
- https://legacy.reactjs.org/docs/typechecking-with-proptypes.html
- https://www.npmjs.com/package/prop-types
