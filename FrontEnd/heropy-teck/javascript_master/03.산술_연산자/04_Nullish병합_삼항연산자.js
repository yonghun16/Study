/* Nullish 병합(nullish coalescing)*/

const n = 0;

// OR (||) 연산자를 사용한 경우
const num1 = n || 9 || 8
console.log(num1)   // 9

// Nullish (??) 병합 연산자를 사용한 경우
const num2 = n ?? 7
console.log(num2)   // 0
console.log(null ?? 1)  // 1
console.log(undefined ?? 2)  // 
console.log(null ?? undefined)  // undefined
console.log(null ?? 1 ?? 2)  //1
console.log(false ?? 1 ?? 2)  // false
console.log(0 ?? 1 ?? 2)  // 0


console.log()
console.log("--------------")
console.log()


// 삼항 연산자(ternary operator)
// 조건 ? 참 : 거짓
const a = 1

if (a < 2) {
  console.log('참!')
} else {
  console.log('거짓...')
}

console.log(a < 2  ? '참!' : '거짓...')


function getAlert(message) {
  return message
    ? message
    : 'no message'
}

console.log(getAlert('안녕하세요'))
console.log(getAlert(''))
