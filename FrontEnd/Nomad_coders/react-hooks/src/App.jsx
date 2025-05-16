import NoUseHookCounter from './components/NoUseHookCounter'
import UseStateCounter from './components/UseStateCounter'
import useCounter from './components/useCounter'

function App() {
  const { count, increment } = useCounter(0);

  return (
    <>
      <NoUseHookCounter />
      <UseStateCounter />
      <button onClick={increment}>useCounter Count is {count}</button>
    </>
  )
}

export default App
