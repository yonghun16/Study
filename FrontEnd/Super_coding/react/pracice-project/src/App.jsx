import { useState } from 'react'
import './css/css.css'
import Toast from './components/Toast.jsx'

function App() {
  return (
    <>
      <div className='wrapper'>
        <Toast />
        <Toast />
        <Toast />
      </div>
    </>
  )
}

export default App
