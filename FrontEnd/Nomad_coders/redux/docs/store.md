# Store

- Redux에서 store는 애플리케이션의 **상태(state)**를 보관하고 관리하는 중앙 저장소 역할을 합니다. 
- React와 같은 UI 라이브러리와 함께 사용할 때, 컴포넌트들이 상태를 직접 들고 있는 대신, 상태를 Redux store에 모아서 일관된 방식으로 접근하고 수정할 수 있도록 합니다.


### 🔧 Redux Store의 핵심 역할 
| 역할       | 설명                                           |
|------------|------------------------------------------------|
| 상태 보관  | 앱의 전체 상태를 하나의 객체 트리로 저장       |
| 상태 읽기  | `getState()`를 통해 현재 상태를 가져올 수 있음 |
| 상태 변경  | `dispatch(action)`을 호출해 상태 변경 요청     |
| 리스너 등록| `subscribe(listener)`로 상태 변경 감지 가능    |


### 🧠 Redux Store의 구성요소
| 구성요소             | 설명                                            |
|----------------------|-------------------------------------------------|
| `state`              | 현재 저장된 상태 (객체 형태)                    |
| `dispatch(action)`   | 상태를 변경하기 위한 유일한 방법                |
| `subscribe(listener)`| 상태가 변경될 때 실행할 콜백 등록               |
| `getState()`         | 현재 상태를 반환하는 함수                       |
| `replaceReducer()`   | 리듀서를 교체할 때 사용 (코드 분할 등에 사용됨) |


### 🛠 Store 생성 방법
- Redux store는 보통 createStore() 또는 최신 Redux Toolkit에서는 configureStore()로 생성합니다.
```js
// 기본 Redux 방식
import { createStore } from 'redux';
const store = createStore(rootReducer);

// Redux Toolkit 방식 (추천)
import { configureStore } from '@reduxjs/toolkit';
const store = configureStore({
  reducer: rootReducer,
});
```


### 🔁 Redux 데이터 흐름
1. 컴포넌트에서 액션(dispatch) 발생
2. 리듀서가 액션에 따라 상태 변경
3. store가 새로운 상태를 저장
4. 구독(subscribe)된 컴포넌트가 리렌더링
