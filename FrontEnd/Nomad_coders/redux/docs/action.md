# Action


### 🔧 Action의 핵심 역할
| 역할             | 설명                                                            |
|------------------|-----------------------------------------------------------------|
| 상태 변경 요청   | 어떤 일이 일어났는지(store에) 알려줌                            |
| 일관된 구조 유지 | type 필드를 기준으로 reducer가 처리할 수 있도록 규칙화됨        |
| 데이터 전달      | payload 속성 등을 통해 상태 변경에 필요한 데이터를 함께 전달함  |


### 🧠 Action 객체의 구조
| 속성       | 설명                                                      |
|------------|-----------------------------------------------------------|
| `type`     | 필수. 어떤 액션인지 식별하는 문자열. ex) `'ADD_TODO'`     |
| `payload`  | 선택. 상태 변경에 필요한 추가 데이터                      |
| `meta`     | 선택. 미들웨어에서 사용할 수 있는 메타 정보               |
| `error`    | 선택. 에러 액션을 나타낼 때 사용                          |


### 📝 Action 예시
```js
// 단순한 액션
const incrementAction = {
  type: 'INCREMENT',
};

// payload 포함
const addTodoAction = {
  type: 'ADD_TODO',
  payload: {
    id: 1,
    text: '리덕스 공부하기',
  },
};
```


### 🔧 Action Creator
| 개념           | 설명                                                       |
|----------------|------------------------------------------------------------|
| 액션 생성 함수 | 액션 객체를 반환하는 함수                                  |
| 장점           | 재사용성 증가, 오타 방지, 테스트 용이성                    |

```js
// Action Creator 예시
function addTodo(text) {
  return {
    type: 'ADD_TODO',
    payload: {
      id: Date.now(),
      text,
    },
  };
}
```


### ⚙ Redux Toolkit에서는?
```js
import { createAction } from '@reduxjs/toolkit';

const addTodo = createAction('ADD_TODO');

// 사용 예시
addTodo({ id: 1, text: 'Redux Toolkit 쓰기' });
```

