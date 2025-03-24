import { useState } from 'react'
import './App.css'
import Dropdown from './Components/Dropdown'

function App() {
  /* state */
  const options = [
    {label: "빨강", value: "red"},
    {label: "녹색", value: "green"},
    {label: "파랑", value: "blue"},
  ]

  /* render */
  return (
    <>
      <Dropdown options={options} />
    </>
  )
}

export default App
