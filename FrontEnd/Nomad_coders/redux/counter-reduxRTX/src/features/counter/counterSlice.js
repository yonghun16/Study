// src/features/counter/counterSlice.js
// createSlice()를 사용해서 **Redux 상태 슬라이스(Slice)**를 정의하는 예제
import { createSlice } from '@reduxjs/toolkit';         // createSlice는 Redux Toolkit의 핵심 API로, 액션 + 리듀서 + 액션 생성 함수까지 한 번에 만들어 줍니다.

const counterSlice = createSlice({
  name: 'counter',                                      // 이 슬라이스의 이름

  initialState: {                                       // 슬라이스의 initialState
    value: 0,                                           // state.counter.value = 0
  },

  reducers: {                                           // 상태를 변경하는 함수, 각 리듀서는 (state, action) 형식의 함수를 사용
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;                    // action.payload만큼 증가시킵니다. payload가 5라면 5만큼 증가
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
