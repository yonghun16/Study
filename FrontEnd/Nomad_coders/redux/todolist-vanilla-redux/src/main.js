import './style.css'
import { createStore } from "redux";

document.querySelector('#app').innerHTML = `
  <div>
    <h1>To Dos</h1>
      <form>
        <input type="text" placeholder="Write to do" />
        <button>Add</button>
      </form>
    <ul></ul>
  </div>
`;


const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";


// 액션
const addToDo = (text) => {
  return {
    type: ADD_TODO, 
    text
  }
}

const delToDo = (id) => {
  return {
    type: DELETE_TODO, 
    id
  }
}


// 리듀서
const reducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, id: Date.now() } ];
    case DELETE_TODO:
      return state.filter(toDo => toDo.id !== action.id);
    default:
      return state;
  }
};


// 스토어
const store = createStore(reducer);


// 구독
store.subscribe(() => console.log(store.getState()));

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach(toDo => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText ="DEL";
    btn.addEventListener("click", dispatchDeleteTodo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    ul.appendChild(li);
    li.appendChild(btn);
  });
}

store.subscribe(paintToDos);


// 디스패치
const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));               // 입력 받은 text를 add함.
}

const dispatchDeleteTodo = (e) => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(delToDo(id));                 // 이벤트의 id를 받아서 del함.
}


// 이벤트 
const onSubmit = e => {
  e.preventDefault();

  const toDo = input.value;
  input.value = "";

  dispatchAddToDo(toDo);   // toDo를 디스패치함.
};

form.addEventListener("submit", onSubmit);
