## Form Input

#### ref
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input

#### Form Input
- \<form> \<input> tag를 통해 입력할 수 있는 요소를 추가
- 데이터를 유저로부터 받을 수 있는 중요한 요소 중 하나.
- 값을 입력 받을 땐 onChange 이벤트 리스너를 통해 변화를 감지

#### 여러 개의 상태 다루기
- 만약 객체인 state를 다룰 때
- setState에서 state 값을 불러와서 쓰고 싶다면..?
- setState(prevState => { ...prevState });

#### summary
- Fom Input은 \<form> \<input> tag를 통해 값을 입력할 수 있는 요소를 추가
- 여러 개의 상태 처리 시 각각 처리해주어도 되고, 
- 객체로 하나로 만들어서 처리해 주는 것도 가능
