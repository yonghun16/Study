/* prototype */

const fruits = new Array('apple', 'mango', 'orange')

console.log(fruits)
console.log(fruits.length)   // 3
console.log(fruits.includes('apple'))  // true

Array.prototype.heropy = function () {
  console.log(this)
}

fruits.heropy()
