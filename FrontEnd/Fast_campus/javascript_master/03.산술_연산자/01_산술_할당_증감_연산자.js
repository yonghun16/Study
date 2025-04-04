/* 산술(Arithmetic) */
console.log()
console.log('* 산술 *')

console.log(1 + 2)
console.log(5 - 7)
console.log(3 + 4)
console.log(10 / 12)
console.log(7 % 5)

function isEven(num) {
  return num % 2 === 0
}

console.log(isEven(3))
console.log(isEven(4))


/* 할당(Assignment) */
console.log()
console.log('* 할당 *')

const a = 3
console.log("a = " + a)
console.log(`a = ${a}`)

let b = 3
b = b + 2
console.log(b)

let c = 3
c += 2          // +, -, *, /, %
console.log(c)


/* 증감(Assertion) */
console.log()
console.log('* 증감 *')

let d = 3

console.log(d++)
console.log(d)
console.log(d--)
console.log(d)
console.log(++d)
console.log(d)
