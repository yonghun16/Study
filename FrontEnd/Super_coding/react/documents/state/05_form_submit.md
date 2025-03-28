## Form Submit

#### 1. Form 제출하기
- \<form>에는 onSubmit 이벤트 리스너가 있어서 form의 제출 이벤트를 핸들링
- 이 이벤트를 발생하기 위해서는 \<buttion type="submit">이 필요

#### 2. event.preventDefault()
- 해당 event에서 기본적으로 실행되는 로직을 실행되지 않게 하고 싶은 경우
  1. a 태그 클릭 시 href 링크로 이동
  2. form의 submit을 누르면 새로 실행이 됨

#### 3. Two-way binding
- 만약 form을 제출하고 값을 모두 초기화를 해 주고 싶다면?
  1. Input에 상태를 value 속성으로 넣어준 후
  2. 제출을 한 후에 '상태를 초기화' 해주면
  3. Value에 초기화된 상태가 반영되어 UI에 update 
