import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store';  // counterActions를 import

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);  // useSelector로 state.counter 가져오기
  const showCounter = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());  // counterActions.toggle() 사용
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment());  // counterActions.increment() 사용
  };

  const increment10Handler = () => {
    dispatch(counterActions.increase(10));  // counterActions.increase(10) 사용
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());  // counterActions.decrement() 사용
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <button onClick={toggleCounterHandler}>토글 카운터</button>
      <button onClick={incrementHandler}>숫자 증가</button>
      <button onClick={increment10Handler}>숫자 10증가</button>
      <button onClick={decrementHandler}>숫자 감소</button>
    </main>
  );
};

export default Counter;
