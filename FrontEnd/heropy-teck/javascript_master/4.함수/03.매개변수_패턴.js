/* 매개변수 패턴(Parameter pattern) */

// 매개변수 기본값(default value)
function sum(a, b = 1) {
  return a + b
}

console.log(sum(1, 2));
console.log(sum(7))




console.log()
// 매개변수 구조 분해 할당(Destructuring assignment)
const user = {
  name: 'HEROPY',
  age: 85,
  email: 'test@email.com'
}

function getName({ name }) {
  // const { name } = user
  return name
}

function getEmail({ email = '이메일이 없습니다.' }) {
  return email
}

console.log(getName(user))
console.log(getEmail(user))



console.log()
// 매개변수 '배열' 구조 분해 할당(Destructuring assignment)
const fruits = ['apple', 'banana', 'cherry']
const numbers = [1, 2, 3, 4, 5, 6, 7]

function getSecondItem([, b]) {
  return b 
}
console.log(getSecondItem(fruits))
console.log(getSecondItem(numbers))



console.log()
// 나머지 매개변수(rest parameter)
function sum2(...rest) {
  return rest.reduce(function (acc, cur) {
    return acc + cur
  }, 0)
}

console.log(sum2(1, 2))  // 3
console.log(sum2(1, 2, 3, 4)) // 10
console.log(sum2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)) // 55
