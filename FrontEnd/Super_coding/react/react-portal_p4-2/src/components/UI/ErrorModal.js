import React, { useState } from 'react';
import ReactDom from 'react-dom';
import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

const Backdrop = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onConfirm} />
  )
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  )
}

const ErrorModal = (props) => {
  return (
    <div>
      {ReactDom.createPortal(                       // 포탈 생성(시작)
        <Backdrop onConfirm={props.onConfirm} />,   // 이동 시킬 컴포넌트(대상)
        document.getElementById('backdrop-root')    // 도착할 위치(끝)
      )}
      {ReactDom.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById('overlay-root')
      )}
    </div>
  );
};

export default ErrorModal;
