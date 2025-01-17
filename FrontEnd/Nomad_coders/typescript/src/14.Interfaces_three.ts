/* Interfaces_three */

// 1.type
type PlayerA = {
  name: string
}

// type의 상속
type PlayerA2 = PlayerA & {
  lastName: string
}

const playerA2: PlayerA2 = {
  name: "nico",
  lastName: "las"
}



// 2.Interface
// 오브젝트의 모양을 알려주기 위해서는 인터페이스 사용
// 나머지의 경우에는 type를 사용
interface PlayerB {
  name: string
}

// Interface의 상속
interface PlayerB2 extends PlayerB {    // extends 사용
  lastName: string
}

interface PlayerB2 {                    // 동일한 interface명 사용
  health: number
}

const playerB2: PlayerB2 = {
  name: "lynn",
  lastName: "las",
  health: 38
}


// 3.Type과 Interface의 클래스 상속
type PlayerC = {
  firstName: string
}

interface PlayerD {
  lastName: string
}

class User implements PlayerD, PlayerC {
  constructor(
    public firstName: string,
    public lastName: string
  ) { }
}

