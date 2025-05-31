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

const store = createStore(reducer);

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  store.dispatch({ type: ADD_TODO, text: toDo });
};

form.addEventListener("submit", onSubmit);
