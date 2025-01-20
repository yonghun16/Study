// .toFixed()
// 숫자를 지정된 고정 소수점 표기(자릿수)가지 표현하는 문자로 반환홥니다.

const num = 3.141592
console.log(num.toFixed(2))                // 3.14
console.log(parseFloat(num.toFixed(2)))    // 3.14


// .toLocaleString()
// 숫자를 현지 언어 형식의 문자로 반환합니다.

const num2 = 1000000
console.log(`${num2.toLocaleString()}원`)  // 1,000,000원


// Number.isInteger()
// 숫자가 정수(integer)인지 확인합니다.

const num3 = 123
const pi = 3.14

console.log(Number.isInteger(num3))     // true
console.log(Number.isInteger(pi))       // false


// Number.isNaN()
// 숫자가 NaN(Not a Number)인지 확인합니다.

const num4 = NaN
const num5 = 123
const str = 'hello world'
const nul = null

console.log(Number.isNaN(num4))    // true  
console.log(Number.isNaN(num5))    // false
console.log(Number.isNaN(str))     // false
console.log(Number.isNaN(nul))     // false


// Number.parseInt() 또는 parseInt()
// 주어진 값(숫자, 문자)을 파싱해 특정 진수(radix)의 '정수'로 반환합니다.

const str2 = '3.1415926535'
const num6 = 3.1415926535

console.log(Number.parseInt(str2, 10))    // 3
console.log(parseInt(num6, 10))           // 3


// Number.parseFloat() 또는 parseFloat()
// 주어진 값(숫자, 문자)을 파싱해 특정 진수(radix)의 '정수'로 반환합니다.

const str3 = '3.1415926535'
const num7 = 3.1415926535

console.log(Number.parseFloat(str3))    // 3.1415926535
console.log(parseFloat(num7))           // 3.1415926535
