// 함수 - 오버로딩(Overloading)

// 1)
function add13_1(a: string, b: string) {
  return a + b
}

function add13_2(a: number, b: number) {
  return a + b
}

add13_1('hello ', 'world~')   // 'hello world'
add13_2(1, 2)                 // 3
// add13_1('hello ', 2)       // Argument of type 'number' is not assignable to parameter of type 'string'.
// add13_2('hello ', 2)       // Argument of type 'string' is not assignable to parameter of type 'number'.


// 2) 오버로딩
// 오버로딩을 사용하여 함수의 구현부를 여러개 만들지 않을 수 있다.
function add13_3(a: string, b: string): string   // 타잆 선언 목적
function add13_3(a: number, b: number): number   // 타입 선언 목적
function add13_3(a: any, b: any) {               // 함수 구현 목적, (a와 b에 들어올 수 있는 타입은 위에서 나열 한 것들이다.)
  return a + b
}
add13_3('hello ', 'world~')   // 'hello world'
add13_3(1, 2)                 // 3
add13_3('hello ', 2)
add13_3(1, 'world~')
