/* 데이터 타입 확인 */
console.log()
console.log(' * 데이터 타입 확인 * ')
const a = 123
console.log(typeof a)
console.log(typeof 'Hello' === 'string')      // true
console.log(typeof 123 === 'number')          // true
console.log(typeof false === 'boolean')       // true
console.log(typeof undefined === 'undefined') // true
console.log(typeof function () {} === 'function') // true
// null, [], {}은 'object'로만 확인하는데 각각은 어떻게 타입을 확인할까?
console.log(typeof null === 'object')         // true
console.log(typeof [] === 'object')           // true
console.log(typeof {} === 'object')           // true


/*  null, [], {} 데이터 타입 확인 */
console.log()
console.log(' *  null, [], {} 데이터 타입 확인 * ')
//console.log(null.constructor)          // 이건 구문오류
console.log([].constructor === Array)    // true
console.log({}.constructor === Object)   // true
console.log(Object.prototype.toString.call(null))  // [object Null]
console.log(Object.prototype.toString.call(null).slice(8, -1) === 'Null') // true


/* checkType으로 데이터 타입 확인(추천) */
console.log()
console.log(' * checkType으로 데이터 타입 확인 * ')
function checkType(data) {  // null을 확인하기 위한 함수
  return Object.prototype.toString.call(data).slice(8, -1)
}
console.log(checkType('Hello'))         // string
console.log(checkType(123))             // number
console.log(checkType(false))           // boolean
console.log(checkType(undefined))       // undefined
console.log(checkType(null))            // null
console.log(checkType([]))              // array
console.log(checkType({}))              // object
console.log(checkType(function () {}))  // function
