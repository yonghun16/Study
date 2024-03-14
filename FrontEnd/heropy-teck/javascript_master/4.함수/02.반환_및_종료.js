/* 반환 및 종료 */

function hello() {
  return 'hello~'
  console.log('Wow')  // 출력되지 않음
}

console.log(hello())



function plus(num) {
  if (typeof num !== 'number') {
    console.log("숫자를 입력해주세요!")
    return 0
  }
  return num + 1
}

console.log(plus(2))
console.log(plus(7))
console.log(plus())
