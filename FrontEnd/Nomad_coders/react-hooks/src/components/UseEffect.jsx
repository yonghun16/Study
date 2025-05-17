import React, { useState, useEffect } from 'react'

function UseEffect() {
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);

  const sayHello = () => {
    console.log('hello');
  }

  // 컴포넌트 마운트 시 1회만 실행 
  useEffect(() => {
    sayHello();
  }, [])

  // aNumber state가 변경되면 실행
  useEffect(() => {
    sayHello();
  }, [aNumber])

  // 윈도우 크기 변경시 이벤트 발생 (useEffect는 1회만 실행)
  useEffect(() => {
    const handleResize = () => console.log('Resized!');
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <h1>Hello</h1>
      <h2>{number}</h2>
      <h2>{aNumber}</h2>
      <button onClick={() => setNumber(number + 1)}>Increase Click</button>
      <button onClick={() => setAnumber(aNumber + 1)}>Increase Click</button>
    </div>
  )
}

export default UseEffect
