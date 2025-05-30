# reducer


### 🔧 Reducer의 핵심 역할
| 역할           | 설명                                                                 |
|----------------|----------------------------------------------------------------------|
| 상태 초기화    | 초기 상태값을 설정하고 반환                                          |
| 액션 처리      | 전달받은 액션에 따라 새로운 상태를 계산                              |
| 순수 함수      | 같은 입력이 들어오면 항상 같은 결과를 반환하고, 부작용이 없어야 함   |


### 🧠 Reducer 함수 구조
| 요소              | 설명                                                              |
|-------------------|-------------------------------------------------------------------|
| `state`           | 현재 상태를 나타내는 객체                                         |
| `action`          | `type`과 `payload` 속성을 가진 액션 객체                          |
| `switch/case`문   | 액션 타입에 따라 상태를 어떻게 업데이트할지 분기 처리             |
| `default`         | 처리하지 않는 액션 타입에 대해서는 기존 상태 반환                 |


### 📝 예시 코드 (기본적인 reducer) 
```js
const initialState = { count: 0 };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}
```
