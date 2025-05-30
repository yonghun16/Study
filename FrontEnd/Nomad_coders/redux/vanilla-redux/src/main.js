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

const countModifier = (count = 0) => {
  return count;
};

const countStore = createStore(countModifier);

console.log(countStore.getState());

