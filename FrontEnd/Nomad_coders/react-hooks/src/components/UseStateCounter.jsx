import React, { useState } from 'react'

function UseStateCounter() {
  const [count, setCount] = useState(0)

  return (
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        useState Count is {count}
      </button>
    </div>
  )
}

export default UseStateCounter
