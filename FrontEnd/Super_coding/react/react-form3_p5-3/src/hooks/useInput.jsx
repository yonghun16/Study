import { useState } from 'react'

const useInput = (validateValue) => {

  // state
  const [enteredValue, setEnteredValue] = useState('');   // input value
  const [isTouched, setIsTouched] = useState(false);      // input touched

  const valueIsValid = validateValue(enteredValue);       // 유효한가?
  const hasError = !valueIsValid && isTouched;            // 에러가 있는가?

  const valueInputChangeHandler = (event) => {            // input value change (keyStroke)
    setEnteredValue(event.target.value);                  // 입력값으로 스테이트 변경
  };

  const valueInputBlurHandler = (event) => {              // input blur
    setIsTouched(true);                                   // 터치한 것으로 스테이트 변경
  };

  // reset 초기화
  const reset = () => {
    setEnteredValue('');                                  // 입력값 초기화
    setIsTouched(false);                                  // 터치한 것 초기화
  }

  return {
    value: enteredValue,      // 입력값  value
    isValid: valueIsValid,    // 유효값  bool
    hasError,                 // 에러존재 bool
    valueInputChangeHandler,  // 핸들러함수
    valueInputBlurHandler,    // 핸들러함수
    reset                     // 리셋함수
  }
}

export default useInput
