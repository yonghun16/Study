import React from 'react'
import ToastMessage from './ToastMessage.jsx'
import ToastButton from './ToastButton.jsx'

const Toast = ({message, children}) => {
  return (
    <div className={`toast toast-${message.title}`}>
      {children}
    </div>
  )
}

export default Toast

