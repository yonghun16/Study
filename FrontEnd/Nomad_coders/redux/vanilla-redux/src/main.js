/* imports */
import './style.css'
import { createStore } from 'redux';


document.querySelector('#app').innerHTML = `
  <div>
    <button id="add">Add</button>
    <span></span>
    <button id="minus">Minus</button>
  </div>
`;


/* Selectors */
const add = document.querySelector('#add');
const minus = document.querySelector('#minus');
const number = document.querySelector('span');

const countModifier = (count = 0, action) => {
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
};

const countStore = createStore(countModifier);

countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });

console.log(countStore.getState());
