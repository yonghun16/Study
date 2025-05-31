# RTK

- Redux Toolkit(RTK)은 Redux의 공식 권장 도구로, Redux를 더 쉽고 효율적으로 사용할 수 있게 도와주는 라이브러리


### 🧰 Redux Toolkit이란?
| 항목          | 설명                                                                     |
|---------------|--------------------------------------------------------------------------|
| 목적          | Redux 사용의 복잡함과 반복 코드를 줄이기 위해 만들어진 공식 툴킷         |
| 포함된 기능   | `configureStore`, `createSlice`, `createAsyncThunk`, `createReducer` 등  |
| 설치 명령어   | `npm install @reduxjs/toolkit react-redux`                               |


### ✨ Redux Toolkit의 주요 기능 요약
| 기능                 | 설명                                                              |
|----------------------|-------------------------------------------------------------------|
| `configureStore()`   | store를 설정하고 DevTools, middleware도 자동으로 포함             |
| `createSlice()`      | reducer + action creator를 동시에 정의하는 함수                   |
| `createAsyncThunk()` | 비동기 액션 생성을 쉽게 처리                                      |
| `createReducer()`    | switch 문 없이 리듀서 정의 가능 (`builder` 패턴)                  |


### 🛠 기본 사용 예제
```js
// 1. Slice 생성
import { createSlice, configureStore } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
    incrementByAmount(state, action) {
      state.value += action.payload;
    },
  },
});

// 2. Store 생성
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

// 3. 액션과 리듀서 export
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default store;
```


### 🔥 Redux Toolkit의 장점
| 장점                    | 설명                                                               |
|-------------------------|--------------------------------------------------------------------|
| 코드 간결화             | 액션 타입/크리에이터/리듀서를 하나의 slice로 통합                  |
| 불변성 자동 처리        | `immer` 기반으로 직접 state 변경해도 불변성 자동 유지              |
| 비동기 처리 통합 지원   | `createAsyncThunk`로 비동기 로직도 간결하게 관리 가능              |
| DevTools 자동 설정      | Redux DevTools가 기본 활성화됨                                     |



