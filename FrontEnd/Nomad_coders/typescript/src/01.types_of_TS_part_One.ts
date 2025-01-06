/* type */
console.log()
console.log("* type *")

type Age = number;
type Name = string;

type Player = {
  name: Name,
  age?: Age    // *Optional chaining (?.)**은 JavaScript에서 
               // 객체나 배열, 함수 등이 존재하지 않을 수도 
               // 있는 상황에서 안전하게 접근할 수 있도록 
               // 도와주는 연산자입니다.
}

const nico : Player = {
  name : "nico",
  age : 34
}

const lynn : Player = {
  name : "lynn",
}

console.log(nico.name);  // nico
console.log(nico.age);   // 34
console.log(lynn.name);  // lynn



/* 함수 선언과 표현 */
console.log()
console.log("* 함수 선언과 표현 *")

// 함수 선언문
function playerMacker(name:string) : Player {
  return {    // 객체 타입으로 리턴
    name
  }
}

// 함수 표현식
const playerMacker2 = (name:string) : Player => (
  {
    name
  }
)

const nico2 = playerMacker("nico");
const lynn2 = playerMacker2("lynn");

console.log(nico2.name)
console.log(lynn2.name)
