## Component

#### react 프로젝트 셋업
```bash
$ npm create vite@latest first-react-project --template react
```

#### 컴포넌트 나누기
- 컴포넌트는 하나의 '관심사'만 담기
- 하나의 '컴포넌트'는 하나의 '함수'다.
```jsx
// App.jsx
<>
  <div className='wrapper'>
    {
      messageArray.map((message) => 
        <Toast title={message.title} text={message.text} />
    )}
  </div>
</>

// Toast.jsx
const Toast = ({message}) => {
  return (
    <div className={`toast toast-${message.title}`}>
      <ToastMessage message={message} />    // ToastMessage 컴포넌트를 분리함.
      <ToastButton />                       // ToastButton 컴포넌트를 분리함.
    </div>
  )
}
```

#### 컴포넌트 합성
- UI가 바뀌어서 컴포넌트들을 재조합 해야 하는 경우는 어떡할까? 
- 컴포넌트 합성을 통해 유연하게 변화에 대응
```jsx
// App.jsx
<>
  <div className='wrapper'>
    <Toast message={messageArray[0]}>
      <ToastMessage message={messageArray[0]}/>
      <ToastButton />
    </Toast>
    <Toast message={messageArray[1]}>
      <ToastMessage message={messageArray[1]}/>
      <ToastButton />
    </Toast>
    <Toast message={messageArray[2]}>
      <ToastMessage message={messageArray[2]}/>
      <ToastButton />
    </Toast>
  </div>
</>

// Toast.jsx
const Toast = ({message, children}) => {
  return (
    <div className={`toast toast-${message.title}`}>
      {children}
    </div>
  )
}
```
