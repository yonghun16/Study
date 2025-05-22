// src/app/store.js
// 이 코드는 Redux Toolkit을 이용해 **전역 상태 저장소(store)**를 설정하는 부분
import { configureStore } from '@reduxjs/toolkit';              // Redux의 스토어를 생성하는 함수
import counterReducer from '../features/counter/counterSlice';  // Redux Toolkit에서 createSlice()로 만든 카운터 관련 리듀서 함수를 가져옵니다.

export const store = configureStore({                           // configureStore()에 객체 형태로 넘기면, 자동으로 combineReducers() 처리됩니다.
  reducer: {
    counter: counterReducer,                                    // state.counter.value로 접근 가능해집니다.
  },
});

