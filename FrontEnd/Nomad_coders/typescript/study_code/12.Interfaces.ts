/* Interfaces */

// concrete type   
console.log()
console.log("== concrete type ==")

type Team = "red" | "blue" | "yellow"
type Health =  1 | 5 | 10

type Player = {     // type으로 정의
  nickname: string,
  team: Team,       // red, blue, yellow 입력이 가능
  health: Health    // 1, 5, 10 만 입력이 가능
}

const nico: Player = {
  nickname: "nick",
  // team: "pink"     // error
  team: "red",
  health: 5
}

console.log(nico.team)



// Interfaces
// interface는 객체의 구조를 정의하는 데 사용되는 강력한 도구입니다. 이는 클래스나 객체가 가져야 할 "속성"과 "메서드"를 명확히 규정하며, 코드의 안정성과 가독성을 높이는 데 기여합니다.
console.log()
console.log("== Interface ==")

type Team2 = "red" | "blue" | "yellow"
type Health2 =  1 | 5 | 10

interface Player2 {   // Interface로 정의
  nickname: string,
  team: Team2,
  health: Health2
}

const nico2: Player2 = {
  nickname: "nick",
  // team: "pink"     // error
  team: "red",
  health: 5
}

console.log(nico2.team)
