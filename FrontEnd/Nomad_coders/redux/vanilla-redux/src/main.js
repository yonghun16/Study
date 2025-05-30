import './style.css'
import { createStore } from 'redux';

document.querySelector('#app').innerHTML = `
  <div>
    <button id="add">Add</button>
    <span></span>
    <button id="minus">Minus</button>
  </div>
`;

// Selectors
const add = document.querySelector('#add');
const minus = document.querySelector('#minus');
const number = document.querySelector('span');

// variables
let count = 0;

number.innerText = count;

/* Functions */
// number render
const updateText = () => {
  number.innerText = count;
}

// Handlers
const handleAdd = () => {
  count += 1;
  updateText();
}

const handleMinus = () => {
  count -= 1;
  updateText();
}

// Event Listeners
add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);

