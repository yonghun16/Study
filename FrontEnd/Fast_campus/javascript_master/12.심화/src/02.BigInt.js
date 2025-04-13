// BigInt

// BigInt 길이 제한이 없는 정수(integer)
// 숫자(number) 데이터가 안정적으로 표시할 수 있는,
// 최대치(2^53 - 1)보다 큰 정수를 표현할 수 있음.
// 정수 뒤에 n을 붙이거나 BigInt()를 호출해 생성함.

console.log(1231231239449203940234395932234392)

console.log(12939329393240938423942340923423043829423n)
console.log(BigInt('1239123129312903812038129031231238323424234'))


const a = 11n
const b = 22

// 숫자 -> Bigint
console.log(a + BigInt(b))
console.log(typeof (a + BigInt(b)))

// BigInt -> 숫자
console.log(Number(a) + b)
console.log(typeof (Number(a) +b))
