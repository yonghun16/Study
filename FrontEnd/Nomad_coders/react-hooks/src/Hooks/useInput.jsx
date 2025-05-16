import { useState } from 'react';

function useInput(initialValue, validator) {
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    const value = event.target.value;

    // validator(maxLen)를 사용한 업데이트
    let willUpdate = true;

    if (typeof validator === 'function') {
      willUpdate = validator(value);         // validator가 false를 반환하면 업데이트 방지
    }

    if (willUpdate) {
      setValue(value);
    }
  };

  // input에 포커스를 잃었을 때 자동으로 공백을 제거
  const onBlur = () => {
    const trimmed = value.trim();

    if (trimmed !== value) {
      setValue(trimmed);
    }
  };

  // inputValue를 초기화
  const reset = () => {
    setValue(initialValue);
  };

  return {
    value,
    bind: { value, onChange, onBlur }, // trimOnBlur 포함
    reset,
    setValue,
  };
}

export default useInput;
