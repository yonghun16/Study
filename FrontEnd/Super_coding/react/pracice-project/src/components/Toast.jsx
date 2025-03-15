import React from 'react'

const Toast = () => {
  return (
    <div className="toast toast-success">
      <main className="toast__message">
        <header className="toast__message-title">Success</header>
        <p className="toast__message-text">Right on!</p>
      </main>
      <button className="toast__button">Dismiss</button>
    </div>
  )
}

export default Toast

