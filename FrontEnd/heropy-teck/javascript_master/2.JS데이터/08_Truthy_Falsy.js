/* 참과 거짓(Truthy and Falsy) */

// 1) false
// 2) 0
// 3) null
// 4) undefined
// 5) NaN
// 6) ''

if ('') {
  console.log('참!')
}

// const fruits = ['Apple', 'Banana', 'Cherry']
const fruits = []

if (fruits.length) {
  console.log('아이템이 들어있음!')
}
