/* type */
console.log()
console.log("* type *")

type Age = number;
type Name = string;

type Player = {
  name: Name,
  age?: Age
}

const nico : Player = {
  name : "nico",
  age : 34
}

const lynn : Player = {
  name : "lynn",
}

console.log(nico.name);
console.log(nico.age);
console.log(lynn.name);



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
