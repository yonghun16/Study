## ref

> https://ko.react.dev/reference/react/useRef    <br />
> https://ko.react.dev/reference/react/createRef

### Ref
- DOM 요소나 React 컴포넌트에 직접 접근할 수 있도록 도와주는 기능
- State를 사용하지 않고 DOM의 값들을 직접 조작할 수 있다.
- 보통 상태(state)와 다르게 ref는 컴포넌트가 다시 렌더링되더라도 값이 유지 됨.

```jsx
import React, { useState, useRef } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  //const [enteredUsername, setEnteredUsername] = useState('');  // 결론적으로 전에 있던 이 state는
  //const [enteredAge, setEnteredAge] = useState('');            // 쓰이지 않게 됨

  const nameInputRef = useRef();                   // * useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    //console.log(nameInputRef.current.value);     // 출력되는 결과를 확인가능
    //console.log(ageInputRef.current.value);
    const enteredUsername = nameInputRef.current.value;     // ref로는 state가 바뀌지 않기 때문에 상태변경을 수동으로 해줘야 함
    const enteredAge = ageInputRef.current.value;           // 지역변수로 enteredUsername, enteredAge를 만들고 ref를 대입함.
                                                            // enteredUsername는 안바뀌지만, 다음 단계에서 setter State가 호출되어 다시 렌더링이 됨.
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({ 
        title: '유효하지 않은 입력값',
        message: '유효한 나이와 이름을 입력해주세요 (빈 값이 아닌).',
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: '유효하지 않은 나이',
        message: '유효한 나이를 입력해주세요 (> 0).',
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    nameInputRef.current.value = '';                   // ref로 직접 dom조작
    ageInputRef.current.value = '';                    // ref로 직접 dom조작
    //setEnteredUsername('');
    //setEnteredAge('');
  };

  //const usernameChangeHandler = (event) => {         // ref로 직접 조작하기에 필요 없는 코드
  //  setEnteredUsername(event.target.value);          // (state를 사용할 필요가 없음)
  //};
  //
  //const ageChangeHandler = (event) => {
  //  setEnteredAge(event.target.value);
  //};

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">사용자 이름</label>
          <input
            id="username"
            type="text"
            ref = {nameInputRef}                  // * ref 
          />
          <label htmlFor="age">나이</label>
          <input
            id="age"
            type="number"
            ref = {ageInputRef}                   // * ref
          />
          <Button type="submit">사용자 추가</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
```
