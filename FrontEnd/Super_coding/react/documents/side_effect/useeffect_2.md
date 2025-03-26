## useEffect 2


#### useEffect()로 유효성 검사
- 입력을 받는 Input 값이 우리가 의도한 규칙에 맞게 들어오는지 검사 -> useEffect로 처리 가능
```jsx
  useEffect(() => {
    setFormIsValid(
      enteredEmail.includes('@') && enteredPassword.trim().length > 6
    );
  }, [enteredEmail, enteredPassword]);  // enteredEmail과 enteredPassword가 변경된 때만 로직 수행
```

#### debounce
> ex. 네이버에서 '대한민국'을 검색 할 때 '대','댛','대한'은 검색할 필요가 없다. 타자가 완성되기 까지 자동완성 기능을 잠시 지연해도 괜찮을 것 같다면 어떻게 구현해야 할까?
- 동일한 이벤트가 짧은 시간내 반복해서 실행되는 경우 일정 시간 지연 시킨 후 처리힌다.
- 일정시간 안에 동일 이벤트가 다시 발생하면 마지막 발생 시점부터 일정 시간을 지연한다.

#### cleanup 함수로 debounce 구현
- React의 useEffect에서 클린업 함수(cleanup function) 는 useEffect가 다시 실행되기 전에 실행되는 함수.
- 이 함수는 보통 타이머 제거, 이벤트 리스너 해제, 메모리 정리 등의 역할을 함.
- 실행 흐름
  - 1. useEffect가 실행되면 setTimeout을 설정.
  - 2. useEffect가 다시 실행되거나 컴포넌트가 언마운트될 때 cleanup이 호출되어 clearTimeout(timer) 실행.
  - 3. 타이머를 제거하여 메모리 낭비 방지.
```jsx
useEffect(() => {
  // 효과 실행 (예: 타이머 설정, 이벤트 리스너 추가 등)
  
  return () => {
    // cleanup 함수 (이전 효과 정리)
  };
}, [dependency]);
```
```jsx
  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('check validity');
      setFormIsValid(
        enteredEmail.includes('@') && enteredPassword.trim().length > 6
      );
    }, 500)    // 0.5초 뒤 로직 수행

    return () => {
      console.log('cleanup');          // 만약 사용자가 0.5초 이내에 추가 입력을 하면
      clearTimeout(identifier);        // 기존 타이머가 clearTimeout을 통해 취소되고 새로운 타이머가 시작됨.
    }
  }, [enteredEmail, enteredPassword]); // enteredEmail과 enteredPassword가 변경된 때만 로직 수행

```
