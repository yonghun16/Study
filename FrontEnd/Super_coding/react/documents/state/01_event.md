## event

### 이벤트
- 이벤트(event)란 프로그래밍하고 있는 시스템에서 일어나는 사건(action) 혹은 발생(occurance)

### 이벤트 핸들러
- 이벤트 발생되면 실행되는 코드 블럭(보통 프로그래머가 만드는 자바스크립트 함수)
- 코드 블럭이 이벤트에 응답해서 실행되기 위해 정의되었을 때, 이를 이벤트 핸들러를 등록(register)했다고 함.
```jsx
const ToastButton = () => {
  const buttonClickHandler = () => {
    console.log('clicked')
  }

  return (
    <button className="toast__button" onClick={buttonClickHandler}>
      Dismiss
    </button>
  )
}
```

### 이벤트 리스너
- 이벤트(사용자의 행동)를 듣는(지켜보는) 메서드
- 이벤트 리스너에는 DOM 요소가 필요하다.
  - javaScript : .addEventListener()
  - React : 컴포넌트에 직접 넣어줌 (e.g. onClick={})

### HTMLButtonElement
- https://developer.mozilla.org/en-US/docs/Web/API/HTMLButtonElement
- HTMLButtonElement 인터페이스는 \<button> 요소를 조작하기 위한 속성과 메서드를 제공하며, 이는 상속을 통해 사용할 수 있는 일반적인 HTMLElement 인터페이스 외에도 추가적인 기능을 포함하고 있습니다.
- 버튼에는 어떤 이벤트 핸들러가 있을까?
  - EventTarget <- Node <- Element <- HTMLElement <- HTMLButtonElement

