## 복잡한 이벤트와 상태 디자인하기


#### 0. 크게 생각하기 (eg. 드롭다운 메뉴)
- 1. 동작 설명해 보기
- 2. State와 event handler로 나누기
- 3. 비슷한 것 묶기

#### 1. 동작 설명해 보기
- 1) 드롭다운 클릭
- 2) 옵션들이 나타남
- 3) 하나의 옵션을 클릭함
- 4) 옵션들이 사라짐
- 5) 클릭한 옵션이 박스에 표시됨

#### 2. State와 event handler로 나누기
> state : 사용자가 화면에서 변화를 느끼는 것들
> event handler : 사용자가 어떤 행동을 취하는 것들
- 1) 드롭다운 클릭 : Event Handler
- 2) 옵션들이 나타남 : State
- 3) 하나의 옵션을 클릭함 : Event Handler
- 4) 옵션들이 사라짐 : State
- 5) 클릭한 옵션이 박스에 표시됨 : State

#### 3. 비슷한 것 묶기
- state (isOpen)
  - 옵션들이 나타남 : true
  - 옵션들이 사라짐 : false

- state (slectedOption)
  - 옵션이 선택됨 : Object
  - 옵션이 선택되지 않음 : null

- event handler (handleSelect)
  - 옵션을 클릭함

- event handler (handleClick)
  - 드롭다운을 클릭함
