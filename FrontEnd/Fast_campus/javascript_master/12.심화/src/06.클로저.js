// 클로저(Closure)

// 함수가 선언될 때의 유효범위(렉시컬 범위)를 기억하고 있다가,
// 함수가 외부에서 호출될 때 그 유효범위의 특정 변수를 참조할 수 있는 개념

function createCount() {  // (클로저 함수)
  let a = 0               // let a가 참조 됨. (클로저 변수)
  return function () {
    return a += 1
  }
}

const count = createCount()  // count가 클로저

console.log(count())
console.log(count())
console.log(count())

console.log()
const count2 = createCount()  // count2가 클로저

console.log(count2())
console.log(count2())
