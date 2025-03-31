## Form control 1 (Submit)

### 유효성 검사
#### 요효성 검사의 케이스
- Submit(폼 제출  시)
  - 입력을 완전히 마칠 때까지 경고를 표시하지 않음.
  - 불필요한 피드백은 줄지만, 피드백이 너무 늦을 수 있음
- Blur(초점 잃을 때)
  - 입력을 완전히 마칠 때까지 경고를 표시하지 않음.
  - 적당한 수준의 피드백이 주어져서 많이 사용
- 매 번 키보드 칠 때
  - 입력하는 도중 경고가 계속 발생할 수 있음
  - 올바르지 않은 형태의 값에 대해 바로 패드백

### Form의 값이 바뀔 때 유효성 검사 실습
- 이름 값을 상태로 저장
- Form 제출 및 ref 적용
- 이름 값이 없을 때 제출하지 않게 분기 처리
- 유효하지 않은 이름 값일 때 에러 메시지 노출
- 제출 시점과 터치 시점을 구분해 주기

### Form control 1 (Submit) 실습
```jsx
// SimpleInput.js
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
```

