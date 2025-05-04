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
