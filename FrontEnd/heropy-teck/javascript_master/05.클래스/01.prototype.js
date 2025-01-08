/* prototype */

const fruits = new Array('apple', 'mango', 'orange')

console.log(fruits)                    // [ 'apple', 'mango', 'orange' ]
console.log(fruits.length)             // 3
console.log(fruits.includes('apple'))  // true

Array.prototype.heropy = function () {  // Array의 프로토타입에 접근하여 함수 생성
  console.log(this)
}

fruits.heropy()         // [ 'apple', 'mango', 'orange' ]
