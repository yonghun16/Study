import { useState } from 'react';
import useInput from '../hooks/useInput';

const SimpleInput = (props) => {

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputIsInvalid,
    valueInputChangeHandler: nameInputChangeHandler,
    valueInputBlurHandler: nameInputBlurHandler,
    reset: resetNameInput
  } = useInput(
    (value)=> value.trim() !== ''
  );

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: enteredEmailIsInvalid,
    valueInputChangeHandler: emailInputChangeHandler,
    valueInputBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput
  } = useInput(
    (value)=> value.includes('@')
  );


  //const [enteredName, setEnteredName] = useState('');
  //const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  //const [enteredEmail, setEnteredEmail] = useState('');
  //const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  //const enteredNameIsValid = enteredName.trim() !== '';
  //const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  //const enteredEmailIsValid = enteredEmail.includes('@');
  //const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  //const nameInputChangeHandler = (event) => {
  //  setEnteredName(event.target.value);
  //};

  //const emailInputChangeHandler = (event) => {
  //  setEnteredEmail(event.target.value);
  //};

  //const nameInputBlurHandler = (event) => {
  //  setEnteredNameTouched(true);
  //};

  //const emailInputBlurHandler = (event) => {
  //  setEnteredEmailTouched(true);
  //};

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    //setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }


    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM

    resetNameInput()
    //setEnteredName('');            // name reset
    //setEnteredNameTouched(false);  // name reset

    resetEmailInput();
    //setEnteredEmail('');           // email reset
    //setEnteredEmailTouched(false); // email reset
  };

  const nameInputClasses = nameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClasses = enteredEmailIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>당신의 이름은?</label>
        <input
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className='error-text'>이름은 빈 값일 수 없습니다.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>당신의 이메일은?</label>
        <input
          type='email'
          id='email'
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {enteredEmailIsInvalid && (
          <p className='error-text'>유효한 이메일을 입력해주세요.</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>제출하기</button>
      </div>
    </form>
  );
};

export default SimpleInput;
