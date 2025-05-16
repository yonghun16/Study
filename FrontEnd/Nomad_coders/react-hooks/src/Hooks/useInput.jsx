import { useState } from 'react';

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const reset = () => {
    setValue(initialValue);
  };

  return {
    value,
    bind: { value, onChange }, // input에 바인딩할 데이터만 따로
    reset,
    setValue,
  };
}

export default useInput
