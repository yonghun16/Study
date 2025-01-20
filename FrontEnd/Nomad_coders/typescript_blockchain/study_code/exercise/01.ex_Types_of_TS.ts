type A = number    // 변수 타입 (숫자 자료형)
type B = string    // 변수 타입 (문자 자료형)
type C = {         // 객체 타입
  name: string
  age: number
}
type D1 = (name: string, age: number) => void    // 함수 타입1
type D2 = {                                      // 함수 타입2
  (name: string, age: number): void              // 오버로딩 
  (name: number, age: number): void
}

//----------------------------------------------------------

const a: A = 10
const b: B = "hello"
const c: C = {
  name: "nico",
  age: 12
}
function func1(name: B): C {    // 함수에 대한 리턴은 타입 C(객체 자료형)
  return {
    name: name,
    age: 12
  }
}
const func2 = (name: B): C => (  // 함수에 대한 리턴은 타입 C(객체 자료형)
  {
    name: name,
    age: 12
  }
)
const func3 = (name: B): C => {  // 함수에 대한 리턴은 타입 C(객체 자료형)
  return {
    name: name,
    age: 12
  }
}
const d: D1 = (name, age) => {
  return name
}

//----------------------------------------------------------

console.log("a =", a)
console.log("b =", b)
console.log("c =", c)
console.log("func1 =", func1("hello"))
console.log("func2 =", func2("hello"))
console.log("func3 =", func3("hello"))
console.log("d ="    , d("hello", 34))
