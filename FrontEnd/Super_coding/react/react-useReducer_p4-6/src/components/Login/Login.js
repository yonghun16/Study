import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

// Email Reducer
const emailReducer = (state, action) => {
  // 값이 바뀌는 경우. setEnteredEmail 
  if(action.type === 'USER_INPUT') {
    return {
      value: action.val,
      isValid: action.val.includes('@')
    }

  // 유효성 검사를 해야 하는 경우, setEmailIsValid
  } else if(action.type === 'INPUT_BLUR') {   // input에서 포커스를 잃을 때
    return {
      value: state.value,
      isValid: state.value.includes('@')
    }
  }
  return {
    value: '',
    isValid: null
  }
};

// Password Reducer
const passwordReducer = (state, action) => {
  // 값이 바뀌는 경우, setEnteredPassword
  if(action.type === 'USER_INPUT') {
    return {
      value: action.val,
      isValid: action.val.trim().length > 6
    }
  }
  // 유효성 검사를 해야 하는 경우, setPasswordIsValid
  else if(action.type === 'INPUT_BLUR') {
    return {
      value: state.value,
      isValid: state.value.trim().length > 6
    }
  }
  return {
    value: '',
    isValid: null
  }

};

const Login = (props) => {
  //아래 서로 관련 있는 state를 하나로 합치기
  //const [enteredEmail, setEnteredEmail] = useState('');       // Email 입력 state
  //const [emailIsValid, setEmailIsValid] = useState();         // Email 검증 state
  //const [enteredPassword, setEnteredPassword] = useState(''); // Password 입력 state
  //const [passwordIsValid, setPasswordIsValid] = useState();   // Password 검증 state

  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null
  });

  const emailChangeHandler = (event) => {
    //setEnteredEmail(event.target.value);
    dispatchEmail({
      type: 'USER_INPUT', 
      val: event.target.value
    });

    setFormIsValid(
      emailState.isValid && passwordState.isValid
    );
  };

  const passwordChangeHandler = (event) => {
    //setEnteredPassword(event.target.value);
    dispatchPassword({
      type: 'USER_INPUT', 
      val: event.target.value
    })

    setFormIsValid(
      emailState.value.includes('@') && event.target.value.trim().length > 6
    );
  };

  const validateEmailHandler = () => {
    //setEmailIsValid(emailState.value.includes('@'));
    dispatchEmail({
      type: 'INPUT_BLUR'
    });
  };

  const validatePasswordHandler = () => {
    //setPasswordIsValid(emailState.value.trim().length > 6);
    dispatchPassword({
      type: 'INPUT_BLUR'
    })
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, emailState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button 
            type="submit" 
            className={classes.btn} 
            disabled={!formIsValid}>
            로그인
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
