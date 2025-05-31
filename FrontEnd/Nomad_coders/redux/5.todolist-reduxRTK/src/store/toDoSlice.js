// store/toDoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState =  [];

// slice (reducer + action creator)
const toDoSlice = createSlice({
  name: 'toDos',
  initialState,

  reducers: {
    addToDo: (state, action) => {
      state.push({
        id: Date.now(),
        text: action.payload,
      });
    },
    deleteToDo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);    // state = state.filter(...) 이렇게 하면 안되고 return으로 새 배열 반환
    },
  },
});

// 액션과 리듀서 export
export const { addToDo, deleteToDo } = toDoSlice.actions;
export default toDoSlice.reducer;
