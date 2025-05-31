/* imports */
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


// 리듀서
const reducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, id: Date.now() } ];
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};


// 스토어
const store = createStore(reducer);


// 액션
const addToDo = (text) => {
  store.dispatch({ type: ADD_TODO, text });
}

const deleteTodo = (e) => {
  console.log(e.target.parentNode);
}

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  addToDo(toDo);
};

form.addEventListener("submit", onSubmit);


// 구독
store.subscribe(() => console.log(store.getState()));

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach(toDo => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText ="DEL";
    btn.addEventListener("click", deleteTodo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    ul.appendChild(li);
    li.appendChild(btn);
  });
}

store.subscribe(paintToDos);


