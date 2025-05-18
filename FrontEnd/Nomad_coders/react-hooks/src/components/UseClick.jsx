import useClick from "../Hooks/useClick"

function UseClick() {
  const sayHello = () => console.log('hello');

  const title = useClick(sayHello);

  return (
    <div>
      <h1 ref={title}>Hi</h1>
    </div>
  )
}

export default UseClick
