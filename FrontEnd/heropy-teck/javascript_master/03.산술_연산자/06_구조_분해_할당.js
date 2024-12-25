/* 구조 분해 할당 (Destructuring Assignment) */

// 각 데이터의 구조에 맞게 배열이나 객체의 구조를 분해하여 개별 변수를 손쉽게 만들 수 있어서 편리함.
const arr = [1, 2, 3]


// 1. 변수를 생성하는 경우
console.log()
console.log('변수를 생성하는 경우')
const [d, e, f] = arr    // 1 2 3
console.log(d, e, f)


// 2. 미리 변수가 존재하는 경우
console.log()
console.log('미리 변수가 존재하는 경우')
let a = 0
let b = 0
let c = 0
;[a, b, c] = arr    // 1 2 3
;[, b, c] = arr    // 2 3

console.log(a, b, c)
console.log(b, c)
// ;[] ;() ;{} 등 괄호가 시작하면 세미콜론을 붙이기


// 3. 배열 데이터로 할당 받기
console.log()
console.log('배열 데이터로 할당 받기')
const [k, ...rest] = arr    // 1 [2, 3]
console.log(k, ...rest)     // 1, 2, 3
// arr = [1, 2, 3] 에서 1 제외한 나머지 변수들을 rest에 할당하기
// spread operator를 사용하면 배열데이터를 만들 수 있다.(?)
// 그 배열을 다시 전개(spread) 해주면 값만 나온다.




// 4. 객체에서의 사용
console.log()
console.log('객체에서의 사용')
const obj = {
  x: 1,
  y: 2,
  z: 3,
  t: 7,
  o: 8
}
const {x, y: heropy, z, t = 4, p: ten = 10} = obj    // 1 2 3 7 10
console.log(x, heropy, z, t, ten)

const { o, ...rest2} = obj
console.log(o, rest2)
// 만약 obj 객체에 t값이 없다면 4를 출력, 
// 객체 데이터에 초기값이 없을 경우를 대비하여 Destructuring Assignment 할 때 기본값을 설정 가능
// y의 변수 이름을 heropy로 쓰고 싶을 때는 y: heropy로 사용 가능
// p라는 변수를 기본값을 넣어 추가하고 변수명을 ten으로 바꾸고 싶을 때 p: ten =10 으로로 사용 가능
