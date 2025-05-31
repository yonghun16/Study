import { createStore } from "redux";


// 액션 타입
const ADD = "ADD";
const DELETE = "DELETE";


// 액션 크리에이터
export const addToDo = (text) => ({
  type: ADD,
  payload: {
    text,
    id: Date.now(),
  },
});

export const deleteToDo = (id) => ({
  type: DELETE,
  payload: id,
});


// 리듀서
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.payload.text, id: action.payload.id }, ...state];
    case DELETE:
      return state.filter((toDo) => toDo.id !== action.payload);
    default:
      return state;
  }
};


// 스토어 생성
const store = createStore(reducer);

export default store;
