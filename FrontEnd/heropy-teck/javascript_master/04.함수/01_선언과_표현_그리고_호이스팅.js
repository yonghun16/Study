// Hoisting

// 함수 선언문(Declaration)
function hello() {}

// 함수 표현식(Expresstion)
const hello2 = function () {}

// 호이스팅(Hoisting)
hello3()

function hello3() {
  console.log("hello~")
}
// 코드는 위에서 아래로 해석을 하는데 어떻게 먼저 hello3가 선언 된 코드 위에서 실행 될 수 있을까?
// 이는 '함수의 선언부가' 유효한 범위(?) 안에서 제일 꼭대기로 올려서 동작하기에 가능하다
// 이를 호이스팅(Hoisting) 현상이라고 한다. 
// 호이스팅은 '함수 선언문'에서만 발생하고 '함수 표현식'에서는 발생하지 않는다.
