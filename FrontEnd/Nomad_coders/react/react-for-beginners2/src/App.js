import { useState, useEffect } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => setCounter((current) => current + 1);

  console.log("i run al the time");

  useEffect(() => {
    console.log("Call me when mounted and updated");
  }, []);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
