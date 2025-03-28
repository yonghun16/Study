## Portal


### Portal
- React Portal은 컴포넌트를 기존의 DOM 계층 구조에서 벗어나 다른 DOM 노드에 렌더링할 수 있도록 해주는 기능

### 언제 사용하나?
- 모달 (Modal) → 부모 컴포넌트의 overflow: hidden 같은 스타일 영향을 안 받게 함.
- 툴팁 (Tooltip) → 특정 요소 위에 떠야 하는 UI를 구현할 때.
- 드롭다운 (Dropdown) → 부모 요소에 의해 가려지지 않도록 하기 위해.
```jsx
<div>
  <SomeComponent />
  {createPortal(children, domNode, key?)}   // 3번째 인자는 옵셔널....
</div>
```
```jsx
const ErrorModal = (props) => {
  return (
    <div>
      {ReactDom.createPortal(                       // 포탈 생성(시작)
        <Backdrop onConfirm={props.onConfirm} />,   // 이동 시킬 컴포넌트(대상)
        document.getElementById('backdrop-root')    // 도착할 위치(끝)
      )}
      {ReactDom.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById('overlay-root')
      )}
    </div>
  );
};
```

