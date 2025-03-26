import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

// Email Reducer
const emailReducer = (state, action) => {
  // 값이 바뀌는 경우. setEnteredEmail 
  if (action.type === 'USER_INPUT') {           // USER_INPUT 액션이 들어오면:
    return {
      value: action.value,                      // action.value를 state.value로 설정하고,
      isValid: action.value.includes('@')       // isValid는 action.value.includes('@')의 결과로 설정됨.
    }

    // 유효성 검사를 해야 하는 경우, setEmailIsValid
  } else if (action.type === 'INPUT_BLUR') {    // INPUT_BLUR 액션이 들어오면 (input에서 포커스를 잃을 때):
    return {
      value: state.value,                       // 기존 state.value를 유지하고,
      isValid: state.value.includes('@')        // isValid만 다시 검증.
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
  if (action.type === 'USER_INPUT') {
    return {
      value: action.value,
      isValid: action.value.trim().length > 6
    }
  }
  // 유효성 검사를 해야 하는 경우, setPasswordIsValid
  else if (action.type === 'INPUT_BLUR') {
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
  //아래 서로 관련 있는 state를 useReducer를 사용해서 하나로 합치고자 함
  //const [enteredEmail, setEnteredEmail] = useState('');       // Email 입력 state
  //const [emailIsValid, setEmailIsValid] = useState();         // Email 검증 state
  //const [enteredPassword, setEnteredPassword] = useState(''); // Password 입력 state
  //const [passwordIsValid, setPasswordIsValid] = useState();   // Password 검증 state
  const [formIsValid, setFormIsValid] = useState(false);

  /* useReducer */
  const [emailState, dispatchEmail] = useReducer(emailReducer, {           // useReducer
    value: '',
    isValid: null
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {  // useReducer
    value: '',
    isValid: null
  });

  /* Handle Input */
  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_INPUT', value: event.target.value });    // action.type, action.value를 dispatch 함
    setFormIsValid(emailState.isValid && passwordState.isValid);
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'USER_INPUT', value: event.target.value })  // action.type, action.value를 dispatch 함
    setFormIsValid(emailState.isValid && passwordState.isValid);
  };

  /* Handle Blur */
  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'INPUT_BLUR' })
  };

  /* Submit Handler */
  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ''}`} >
          <label htmlFor="email">이메일</label>
          <input type="email" id="email"
            value={emailState.value}
            onChange={emailChangeHandler}     // USER_INPUT
            onBlur={validateEmailHandler}     // INPUT_BLUR
          />
        </div>
        <div
          className={`${classes.control} ${passwordState.isValid === false ? classes.invalid : ''}`} >
          <label htmlFor="password">비밀번호</label>
          <input type="password" id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}   // USER_INPUT
            onBlur={validatePasswordHandler}   // INPUT_BLUR
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
