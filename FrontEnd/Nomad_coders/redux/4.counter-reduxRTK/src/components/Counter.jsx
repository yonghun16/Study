// src/components/Counter.jsx
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../features/counter/counterSlice';

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Count: {count}</h1>

      <button onClick={ () => dispatch(increment()) }>  +1  </button>
      <button onClick={ () => dispatch(decrement()) }>  -1  </button>
      <button onClick={ () => dispatch(incrementByAmount(5)) }>  +5  </button>
    </div>
  );
}
