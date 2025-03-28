## useReducer

> https://react.dev/reference/react/useReducer

### useState의 한계
- React 상태 업데이트는 비동기적으로 실행됩니다.
- 이 코드가 실행될 때, 이전 상태 값(emailState)이 아직 변경되지 않았을 수도 있습니다.
- 즉, 이메일 상태가 변경되더라도 예상대로 유효성 검사가 실행되지 않을 가능성이 있습니다.
```jsx
const validateEmailHandler = () => {
    setEmailIsValid(emailState.includes('@'));
}
```

### reducer & useReducer 
```jsx
const reducer = (state, action) => {
  switch (action.type) {
    case 'ACTION_TYPE_1':
      return {
        ...state,
        key: action.payload
      };

    case 'ACTION_TYPE_2':
      return {
        ...state,
        anotherKey: action.payload
      };

    default:
      return state;
  }
};

const [state, dispatch] = useReducer(reducer, initialArg, init?)
```
- 요소 설명
  - reducer
    - state : 현재 상태 값
    - action : 상태를 변경하기 위한 명령(__객체__)
  - useReducer
    - dispatch(action) : 상태 변경 요청 함수
    - reducer(state, action): 상태(state)를 업데이트하는 함수.
    - initialArg: 초기 상태 값입니다.
    - init? (선택 사항): initialArg을 변환하여 초기 상태를 생성하는 함수입니다.
- 언제 useReducer를 사용할까?
  - 상태가 복잡하고, 여러 개의 상태 변화를 관리해야 할 때
  - 상태 업데이트 '로직을 분리'하고 '재사용'하고 싶을 때
  - useState보다 더 구조적인 방식으로 상태를 관리하고 싶을 때

### reducer & useReducer 기본 사용 예제
```jsx
import { useReducer } from "react";

// 1. reducer 함수 정의 (현재 상태, 액션을 받아 새로운 상태 반환)
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

// 2. 컴포넌트에서 useReducer 사용 기본 예제
function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })} > + </button>
      <button onClick={() => dispatch({ type: "DECREMENT" })} > - </button>
    </div>
  );
}

export default Counter;
```

### reducer & useReducer 실습 예제
```jsx
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
```
