## Form control 2 (Lose Focus, on every keystroke)

### Form control 2 (Lose Focus) 실습
```jsx
// SimpleInput.js
  ... 
  const nameInputBlurHandler = (event) => {   // 초점을 잃었을 때
    console.log("event onBlur");
    setEnteredNameIsTouched(true);            // 터치가 되었고
    if (enteredName.trim().length === 0) {    // 빈스트링이면
      setEnteredNameIsValid(false);           // 이건 유효하지 않습니다.
      return;
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
          onBlur={nameInputBlurHandler}
  ...
```

### Form control 2 (on every keystroke) 실습

```jsx
// SimpleInput.js
  ... 
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
    setEnteredNameIsTouched(true);

    if(event.target.value.trim().length === 0) {   // 유효한 값이 아니면?
      setEnteredNameIsValid(false);                // false
    }else {
      setEnteredNameIsValid(true);                 // true
    }
  };
  ...
```
