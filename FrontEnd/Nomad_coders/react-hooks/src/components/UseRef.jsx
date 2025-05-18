import { useRef } from "react"

function UseRef() {
  const sayHello = useRef();

  setTimeout(() => {
    sayHello.current.focus();              // 3초 후에 sayHollo라고 참조된 Element에 focus
    console.log(sayHello.current.value);   // 3초 후에 sayHollo라고 참조된 Element의 value 출력
  }, 3000)

  return (
    <div>
      <h1>Hi</h1>
      <input ref={sayHello} placeholder="la" /> 
    </div>
  )
}

export default UseRef
