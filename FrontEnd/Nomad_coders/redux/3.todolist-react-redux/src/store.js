import { createStore } from "redux";

// 액션
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

export const addToDo = (text) => {
  return {
    type: ADD_TODO,
    payload: {
      id: Date.now(),
      text,
    },
  };
};

export const deleteToDo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};


// Reducer
const initialState = {
  toDos: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        toDos: [...state.toDos, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        toDos: state.toDos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
}


// Store 생성
const store = createStore(reducer);

export default store;
