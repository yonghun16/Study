import React, { useState } from 'react'

function UseState() {
  const [item, setItem] = useState('')   //  리턴값은 Array,  [item, setItem] -> 구조분해할당으로 입력 받음
  // const state = useState(0);
  // const item = state[0];
  // const setItem = state[1];

  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);

  return (
    <div>
      <h1>Hello {item}</h1>
      <button onClick={incrementItem}>Increment</button> 
      <button onClick={decrementItem}>Decrement</button>
    </div>
  )
}

export default UseState
