import useCounter from '../Hooks/useCounter'

function UseCounterComponent() {
  const { count, increment } = useCounter(0);

  return (
    <>
      <button onClick={increment}>useCounter Count is {count}</button>
    </>
  )
}

export default UseCounterComponent;
