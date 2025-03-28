## State

### 컴포넌트 함수
- 컴포넌트는 하나의 함수
- 처음에 렌더링이 될 때 모든 컴포넌트 함수는 실행이 완료된다. 그 다음 컴포넌트 내에서 이벤트가 발생해도 컴포넌트 함수는 다시 실행되지 않는다.
```jsx
const Toast = ({ message }) => {
  let text = 'sample';
  const buttonClickHandler = (title) => {
    text = "changed";
    console.log("tesst");
  }
  return (
    <div className={`toast toast-${message.title}`}>
      <ToastMessage message={message}/>
      <p>{text}</p>
      <button className="toast__button" onClick={() => buttonClickHandler(message.title)}>
        Dismiss
      </button>
    </div>
  );
};
```
- 위 코드에서 toast__button을 여러 번 눌러도 text는 "changed"로 바뀌지 않는다.

### State
- State는 '컴포넌트 내'에서 바뀔 때마다 항상 컴포넌트를 업데이트 해줄 수 있는 값
- state, prots -> 값이 바뀔 때 마다 컴포넌트 업데이트
