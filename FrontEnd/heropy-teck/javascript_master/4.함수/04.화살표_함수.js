/* 화살표 함수 (Arrow Function) */

// function sum() {}
// const sum = function () {}
// const sum = () => {}
//
// function sum(a, b) {
//   return a + b
// }

// const sum = (a, b) => {
//   return a + b
// }
// const sum = (a, b) => a + b 
//
// console.log(sum(1, 2))     // 2
// console.log(sum(10, 20))  // 20

const a = () => {}
const b = x => {}       // 매개변수가 1개 일 때
const c = (x, y) => {}  // 매개변수가 2개 일 때
const d = x => { return x * x }   
const e = x => x * x    // return 생략 가능
const f = x => {
  console.log(x * x)
  return x * x
}
const g = () => { return { a: 1} }
const h = () => ({ a: 1 })
