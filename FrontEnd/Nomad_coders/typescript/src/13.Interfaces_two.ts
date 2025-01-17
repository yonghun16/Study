/* Interfaces_Two */

// 추상 클래스(abstract class name { }) : 구현할 클래스의 청사진
// 다른 클래스가 상속받아야 하는 기본 구조와 메서드를 정의할 수 있는 클래스입니다.
abstract class User {
  constructor(
    protected firstName: string,
    protected lastName: string
  ) { }

  abstract sayHi(name: string): string
  abstract fullName(): string
}

class Player extends User {
  fullName(): string {
    return `${this.firstName} ${this.lastName}`
  }

  sayHi(name: string): string {
    return `Hello ${name}. My name is ${this.fullName()}`
  }
}


// 인터페이스(Interface)
// 클래스가 따라야 하는 규약(계약)을 정의합니다. 구현은 전혀 포함되지 않으며, 순수한 타입 정의를 위해 사용됩니다.
interface User2 {
  firstName: string,
  lastName: string
  sayHi(name: string): string
  fullName(): string
}

interface Human {
  health: number
}

class Player2 implements User2, Human {
  constructor(
    public firstName: string,
    public lastName: string,
    public health: number
  ) { }
  sayHi(name: string): string {
    return "test"
  }
  fullName(): string {
    return "test"
  }
}

function makeUser(user2: User2): User2 {
  return {
    firstName: "nico",
    lastName: "las",
    fullName: () => "xx",
    sayHi: () => "string"
  }
}

makeUser({
  firstName: "nico",
  lastName: "las",
  fullName: () => "xx",
  sayHi: () => "string"
})
