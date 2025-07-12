// 타입 단언(Assertion)
// '단언' - 주저하지 아니하고 딱 잘라 말함.

// 단언 키워드 - as
// Non-null 단언 연산자 - !


// 1)
const el = document.querySelector('body') as HTMLBodyElement
const el2 = document.querySelector('container') as HTMLBodyElement
el.textContent = 'Hello world?!'
el2!.textContent = 'Hello container?!'


// 2)
function getNumber(x: number | null | undefined) {
  return Number((x as number).toFixed(2))
}
getNumber(3.1415926535)
getNumber(null)      // type error


// 3)
function getValue(x: string | number, isNumber: boolean) {
  if (isNumber) {
    return Number((x as number).toFixed(2))
  } else {
    return (x as string).toUpperCase()
  }
}
getValue("hello", false)         // "hello"
getValue(3.1415926535, true)     // 3.14
  

// 할당 단언
let num51!: number
console.log(num51)    // undefined
