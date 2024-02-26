/* Nullish 병합(Nullish Coalescing)*/

const n = 0;

// OR 연산자를 사용한 경우
const num1 = n || 7
console.log(num1)   // 7

// Nullish 병합 연산자를 사용한 경우
const num2 = n ?? 7
console.log(num2)   // 0
