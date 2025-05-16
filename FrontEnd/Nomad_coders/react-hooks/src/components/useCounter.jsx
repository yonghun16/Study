import { useState } from 'react';

function useCounter(initial) {
  const [count, setCount] = useState(initial);
  const increment = () => setCount((c) => c + 1);
  return { count, increment };
}

export default useCounter;
