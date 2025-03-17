import { useState } from 'react'
import './css/css.css'
import Toast from './components/Toast.jsx'
import ToastMessage from './components/ToastMessage.jsx'
import ToastButton from './components/ToastButton.jsx'

function App() {
  const messageArray = [
    {
      title: 'Success',
      text: 'Right on!',
    },
    {
      title: 'Error',
      text: 'Something went too wrong',
    },
    {
      title: 'Warning',
      text: 'Be careful',
    },
  ];
  return (
    <>
      <div className='wrapper'>
        <Toast message={messageArray[0]}>
          <ToastMessage message={messageArray[0]}/>
          {/* <ToastButton /> */}
        </Toast>
        <Toast message={messageArray[1]}>
          <ToastMessage message={messageArray[1]}/>
          <ToastButton />
        </Toast>
        <Toast message={messageArray[2]}>
          <ToastMessage message={messageArray[2]}/>
          <ToastButton />
        </Toast>
      </div>
    </>
  )
}

export default App
