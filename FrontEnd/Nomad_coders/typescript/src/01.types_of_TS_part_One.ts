/* type */
console.log()
console.log("== type ==")

type Age = number;
type Name = string;
type Player = {
  name: Name,
  age?: Age    // *Optional chaining (?)은 JavaScript에서 객체나 배열, 함수 등이 존재하지 않을 수도 있는 상황에서 안전하게 접근할 수 있도록 도와주는 연산자입니다.
}

const nico: Player = {
  name: "nico",
  age: 34,
  // height: 190  // error 발생 Player Type에 정의되어 있지 않음.
}

const lynn: Player = {
  name: "lynn",
}

console.log(nico.name);  // nico
console.log(nico.age);   // 34
console.log(lynn.name);  // lynn
console.log(lynn.age);   // undefinded



/* 함수 선언과 표현 */
console.log()
console.log("== 함수 선언과 표현 ==")

// 함수 선언문
function playerMacker(name: string): Player {
  return {    // 객체 타입으로 리턴
    name,
    age: 12
  }
}

// 함수 표현식
const playerMacker2 = (name: string): Player => (    // 소괄호 안에 표현
  {
    name,
  }
)

const nico2 = playerMacker("nico");
console.log(nico2.name)
console.log(nico2.age)

const lynn2 = playerMacker2("lynn");
console.log(lynn2.name)
