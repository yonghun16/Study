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

/* ----------------------------------------------
 * ### 🔁 Redux 데이터 흐름
 * 1. 컴포넌트에서 액션(dispatch) 발생
 * 2. 리듀서가 액션에 따라 상태 변경
 * 3. store가 새로운 상태를 저장
 * 4. 구독(subscribe)된 컴포넌트가 리렌더링
----------------------------------------------- */


/* Selectors */
const add = document.querySelector('#add');
const minus = document.querySelector('#minus');
const number = document.querySelector('span');
number.innerText = 0;

// 파라메터를 텍스트에서 변수로 넘김
// 텍스트가 다를 때는 에러를 밷지 않지만, 변수명이 다르면 에러를 밷음 -> 코드 안정
const ADD = "ADD";
const MINUS = "MINUS"


// 2. 리듀서
const countModifier = (count = 0, action) => {
  switch (action.type) {
    case "ADD":
      return count + 1;
    case "MINUS":
      return count - 1;
  }
};


// 3. 스토어 생성 
// 리듀서의 return 값에 의한 변경 저장
const countStore = createStore(countModifier);


// 구독에 쓰일 리스너
const onChange = () => {
  number.innerText = countStore.getState();
}

// 4. 구독 등록
countStore.subscribe(onChange);


// 1. dispatch
const handleAdd = () => {
  countStore.dispatch({ type: ADD })
}

const handleMinus = () => {
  countStore.dispatch({ type: MINUS })
}


// 0.event start
add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
