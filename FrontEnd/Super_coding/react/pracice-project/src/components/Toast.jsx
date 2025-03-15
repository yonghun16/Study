import React from 'react'

const Toast = (props) => {
  return (
    <div className={`toast toast-${props.title}`}>
      <main className="toast__message">
        <header className="toast__message-title">{props.title}</header>
        <p className="toast__message-text">{props.text}</p>
      </main>
      <button className="toast__button">Dismiss</button>
    </div>
  )
}

export default Toast

