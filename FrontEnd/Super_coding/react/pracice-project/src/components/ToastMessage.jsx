import React from 'react'

const ToastMessage = ({message}) => {
  return (
    <main className="toast__message">
      <header className="toast__message-title">{message.title}</header>
      <p className="toast__message-text">{message.text}</p>
    </main>
  )
}

export default ToastMessage
