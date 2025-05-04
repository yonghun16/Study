# effects


### Effect hook란?
- React의 Effect Hook (useEffect)는 컴포넌트가 **렌더링된 이후에 발생해야 하는 부수 효과(side effect)**를 처리하기 위해 필요합니다. 간단히 말해, 화면에 보이는 UI를 바꾸는 일 외의 동작을 하고 싶을 때 사용

### 1 번만 실행 하기
```jsx
import { useState, useEffect } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => setCounter((current) => current + 1);

  console.log("i run al the time");

  useEffect(() => {
    console.log("Call me when mounted and updated");  // 처음 mounted 되었을 때 랜더링을 다시 하더라도 1번만 실행
  }, []);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
```

### state에 변화만 있을 때 실행하기
```jsx
import { useState, useEffect } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setCounter((current) => current + 1);
  const onChange = (event) => setKeyword(event.target.value);

  console.log("i run al the time");

  useEffect(() => {
    console.log("CALL THE API... ");
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("search for", keyword);
    }
  }, [keyword]);                          // keyword에 변화가 있을 때만 적용
  useEffect(() => {
    console.log("i run change counter");
  }, [counter]);                          // counter에 변화가 있을 때만 적용

  return (
    <div>
      <input 
        value={keyword}
        onChange={onChange}
        type="text" 
        placeholder="Search here..." 
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
```
