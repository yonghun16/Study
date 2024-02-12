/* 함수 */
// function hello() {
//   console.log('hello!');
// }
// hello()          // 함수 호출(함수 실행)
// console.log(hello)   // 함수 자체의 내용을 출력

// 단순한 함수 자체와 뒤쪽에 소괄호를 열고 닫아서 함수를 호출하는 것은 다른 값이 된다.

// function getNumber() {
//   return 123
// }

const getNumber = function () {
  return 123
}

console.log(getNumber())           // 123
console.log(getNumber)             // 함수 내용 출력
console.log(typeof getNumber)      // function
console.log(typeof getNumber())    // number


// 매개변수 활용

const a = function () {
  console.log('A')
}

const b = function (c) {
  console.log(c)
}

b(a)
