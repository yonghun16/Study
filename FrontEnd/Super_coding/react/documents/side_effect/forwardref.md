## forwardRefs

### 버튼 클릭 시 focus
- 로그인 페이지 에서 로그인 버튼을 눌렀을 때, 값이 입력되어 있지 않은 경우 입력 창에 '포커싱'하는 기능 구현

### useRef
- 컴포넌트의 생애주기 동안 유지되는 변경 가능한 객체를 생성할 때 사용
- 값이 변경되어도 리렌더링을 유발하지 않음. -> useState와 useRef의 차이
- 컴포넌트가 다시 렌더링되어도 값을 유지함 -> 상태를 저장하는 용도로 활용할 수 있음.
- DOM 요소에 접근할 때 사용 -> useRef를 ref 속성에 연결하면 해당 DOM 요소를 직접 조작 가능.

### 언제 useRef를 사용해야 할까?
- 렌더링 없이 값을 유지하고 싶을 때
- DOM 요소에 직접 접근해야 할 때
- 이전 값을 기억해야 할 때 (useRef는 리렌더링되어도 값이 유지됨)
- 📌 주의! 상태 변경이 필요하면 useState를 사용하고, 단순히 값을 유지하거나 DOM을 다룰 때 useRef를 사용하세요.

### useRef 기본 사용법
```jsx
import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);   // ref 생성

  const handleFocus = () => {
    inputRef.current.focus();      // input 요소에 직접 포커스 주기
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="클릭 시 포커스" />  {/* ref 속성에 연결 */}
      <button onClick={handleFocus}>포커스 주기</button>
    </div>
  );
}

export default FocusInput;
```

### useRef 실습 (한 컴포넌트 내에서 ref 전달)
```jsx
  ... 
  const emailInputRef = useRef();          // ref 생성
  const passwordInputRef = useRef();       // ref 생성
  ...
  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      authCtx.onLogin(emailState.value, passwordState.value);
    } else {
      // emailIsValid는 정상이면 ?  passwordInputRef.current.focus() 포커싱 : 아니면 email에 포커싱
      emailIsValid ? passwordInputRef.current.focus() : emailInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>       // {/* 제출 버튼을 누르면! */}
        <div
          <input
            ...
            ref={emailInputRef}             // {/* ref 속성에 연결 */}
          />
        </div>
            ...
        <div
          <input
            ...
            ref={passwordInputRef}           // {/* ref 속성에 연결 */}
          />
        </div>
        ...
    </Card>
  );

```

### forwardRef(자식 컴포넌트에게 ref 전달하기)
- forwardRef : React에서 ref를 자식 컴포넌트로 전달할 때 사용하는 함수. 
- 기본적으로 ref는 부모 컴포넌트에서 특정 DOM 요소나 컴포넌트 인스턴스에 접근할 때 사용되는데, 일반적인 props처럼 전달되지 않음. 
- forwardRef를 사용하면 부모에서 ref를 내려주고, 자식 컴포넌트가 이를 받아서 특정 요소에 연결할 수 있음.

### forwardRef 사용예시
- 동작 방식
  - forwardRef를 사용해서 InputComponent가 ref를 받을 수 있도록 함.
  - 부모 컴포넌트에서 useRef를 이용해 ref 생성.
  - InputComponent에 ref를 전달하면 내부의 \<input> 요소에 연결됨.
  - focusInput 함수에서 inputRef.current.focus()를 호출하면 input이 포커스됨.
```jsx
import React, { forwardRef, useRef } from "react";

// 자식 컴포넌트
const InputComponent = forwardRef((props, ref) => {   // forwardRef로 props 받음
  return <input ref={ref} {...props} />;
});

// 부모 컴포넌트
const ParentComponent = () => {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <InputComponent ref={inputRef} placeholder="Type something..." />    // props처럼 ref 내려줌
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default ParentComponent;
```

### useImperativeHandle
- React에서 forwardRef와 함께 사용되어, 부모 컴포넌트가 자식 컴포넌트의 특정 메서드나 값을 직접 제어할 수 있도록 하는 Hook.
- 기본적으로 ref는 DOM 요소나 컴포넌트 인스턴스를 참조하는 역할을 하지만, 
- useImperativeHandle을 사용하면 부모가 접근할 수 있는 기능을 __커스텀__할 수 있다.

### 기본 사용법
- 동작 방식
  - 자식(CustomInput)에서 useRef로 실제 input 요소를 참조.
  - useImperativeHandle(ref, () => ({})) 내부에서 focus 및 getValue 메서드를 정의.
  - 부모(ParentComponent)에서 useRef를 이용해 자식(CustomInput)의 ref를 저장.
  - inputRef.current.focus()를 호출하면 자식 컴포넌트의 focus 메서드가 실행됨.
  - inputRef.current.getValue()를 호출하면 input의 현재 값을 가져올 수 있음.
```jsx
import React, { useRef, forwardRef, useImperativeHandle } from "react";

// 자식 컴포넌트
const CustomInput = forwardRef((props, ref) => {
  const inputElementRef = useRef();                 // 3️⃣  실제 input 요소를 위한 ref 생성 -> <input>태그를 가리킴

  useImperativeHandle(ref, () => ({                 // 부모로부터 전달받은 ref와 inputElementRef 연결
    focus: () => {                                  // focus 메서드 커스텀
      inputElementRef.current.focus();
    },
    getValue: () => inputElementRef.current.value,  // getValue 메서드 커스텀
  }));

  return <input ref={inputElementRef} {...props} />; // <input> tag를 ref함.
});

// 부모 컴포넌트
const ParentComponent = () => {
  const customInputRef = useRef();                  // 1️⃣  부모 컴포넌트 ref 생성 ->  CustomInput의 ref를 가리킴

  const handleFocus = () => {
    customInputRef.current.focus();                 // 자식 컴포넌트의 focus 메서드 실행.
  };

  const handleGetValue = () => {
    alert(customInputRef.current.getValue());       // 자식 컴포넌트 getValue() 실행 -> 의 input의 현재값을 알아오기
  };

  return (
    <div>
      <CustomInput ref={customInputRef} placeholder="Enter text..." />  // 2️⃣  부모 ref를 자식에게 전달
      <button onClick={handleFocus}>Focus Input</button>
      <button onClick={handleGetValue}>Get Input Value</button>
    </div>
  );
};

export default ParentComponent;
```
