// Math.abs()
// 주어진 숫자의 절댓값을 반환합니다.

console.log(Math.abs(-10))    // 10


// Math.ceil()
// 주어진 숫자를 올림해 '정수'를 반환합니다.

console.log(Math.ceil(3.1415926535))   // 4


// Math.floor()
// 주어진 숫자를 내림해 '정수'를 반환합니다.

console.log(Math.floor(3.1415926535))   // 3


// Math.round()
// 주어진 숫자를 반올림해 '정수'를 반환합니다.

console.log(Math.round(3.1415926535))   // 3


// Math.max()
// 주어진 숫자 중 가장 큰 숫자를 반환합니다.

console.log(Math.max(1, 22, 38, 192))   // 192


// Math.min()
// 주어진 숫자 중 가장 작은 숫자를 반환합니다.

console.log(Math.min(1, 22, 38, 192))   // 1


// Math.pow()
// 주어진 숫자의 거듭제곱한 값을 반환합니다.

console.log(Math.pow(4, 2))     // 16
console.log(Math.pow(10, 3))    // 1000


// Math.random()
// 숫자 0이상, 1 미만의 난수를 반환합니다.

console.log(Math.random())

function randomOfNumber(min = 0, max = 10) {
  return Math.floor(Math.random() * (max - min)) + min
}

console.log(randomOfNumber())
console.log(randomOfNumber(11, 20))

