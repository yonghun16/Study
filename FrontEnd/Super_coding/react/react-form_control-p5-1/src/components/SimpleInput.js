import { useRef, useState } from 'react';

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState(' ');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(enteredName)

    setEnteredNameIsTouched(true);

    // enteredName이 빈 값인 경우 제출이 안 되게 수정
    if(enteredName.trim().length === 0) {
      console.log("login fail");
      setEnteredNameIsValid(false);
      return
    } else {
      console.log("login success");
      setEnteredNameIsValid(true);
      setEnteredName('');
    }
  };

  // true면 메시지 노출
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched;

  const nameInputClasses = nameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>당신의 이름은?</label>
        <input 
          type='text' 
          id='name' 
          ref={nameInputRef} 
          value={enteredName}
          onChange={nameInputChangeHandler}
        />
        {nameInputIsInvalid && <p className='error-text'>이름을 입력해줘</p>}
      </div>
      <div className="form-actions">
        <button>제출하기</button>
      </div>
    </form>
  );
};

export default SimpleInput;
