import { useState } from 'react'
import './css/css.css'
import Toast from './components/Toast.jsx'

function App() {
  const messageArray = [
    {
      title: 'Success',
      text: 'Right on1!',
    },
    {
      title: 'Success',
      text: 'Right on2!',
    },
    {
      title: 'Error',
      text: 'Something went wrong1',
    },
    {
      title: 'Error',
      text: 'Something went wrong2',
    },
    {
      title: 'Warning',
      text: 'Be careful1',
    },
    {
      title: 'Warning',
      text: 'Be careful2',
    },
  ];
  return (
    <>
      <div className='wrapper'>
        {
          messageArray.map((message) => 
            <Toast title={message.title} text={message.text} />
        )}
      </div>
    </>
  )
}

export default App
