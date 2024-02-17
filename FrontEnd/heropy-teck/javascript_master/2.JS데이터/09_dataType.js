/* 데이터 타입 확인 */

const a = 123

console.log(typeof a)
console.log(typeof 'Hello' === 'string')
console.log(typeof 123 === 'number')
console.log(typeof false === 'boolean')
console.log(typeof undefined === 'undefined')
console.log(typeof null === 'object')     // null은 null이라 표시 못함.
console.log(typeof [] === 'object')
console.log(typeof {} === 'object')
console.log(typeof function () {} === 'function')

//console.log(null.constructor)
console.log([].constructor === Array)
console.log({}.constructor === Object)

console.log(Object.prototype.toString.call(null))
console.log(Object.prototype.toString.call(null).slice(8, -1) === 'Null')

function checkType(data) {  // null을 null이라 표시가능한 함수
  return Object.prototype.toString.call(data).slice(8, -1)
}

console.log(checkType('Hello'))
console.log(checkType(123))
console.log(checkType(false))
console.log(checkType(undefined))
console.log(checkType(null))
console.log(checkType([]))
console.log(checkType({}))
console.log(checkType(function () {}))
