/* 문자 데이터 */
const string1 = "Hello1"
const string2 = 'Hello2'
const string3 = `Hello3 ${string1} ?!`     // 보간 (template literal)
 
console.log(string3)


/* 숫자 데이터 */
console.log()
console.log("숫자 데이터")
// NaN (Not a Number)
const number = -123
const pi = 3.14    // 부동소수점 표현

console.log(pi)
console.log(number + 1)
console.log(number + undefined)
console.log(typeof(number + undefined))  // 숫자연산에 숫자가 아니다.
console.log(typeof(pi))


/* 숫자 데이터2 */
console.log()
console.log("숫자 데이터 2")
const a = 0.1
const b = 0.2

console.log(a + b)   // 0.3000000000004 // 부동소수점 오류
console.log((a + b).toFixed(1))  // toFixed는 문자데이터로 바뀜
console.log(typeof (a + b).toFixed(1))

console.log(Number((a + b).toFixed(1)))  // 다시 숫자 데이터로 변환
console.log(typeof Number((a + b).toFixed(1)))

