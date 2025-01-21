/* Classes */
// ** 추상 클래스(abstract class)**는 객체지향 프로그래밍(OOP)에서 다른 클래스가 상속받아야 할 공통적인 특성과 동작을 정의하는 클래스입니다. 추상 클래스는 일부 메소드나 속성을 구현하지 않고 선언만 할 수 있으며, 이 경우 자식 클래스에서 반드시 구현해야 합니다.
// ** 추상 메소드(abstract method)**는 클래스의 설계 단계에서 메소드의 형태만 정의하고, 실제 구현은 자식 클래스에서 이루어지도록 강제하는 메소드입니다. 이는 객체지향 프로그래밍(OOP)에서 **추상 클래스(abstract class)**와 함께 사용됩니다.

console.log();
console.log("== Classes ==");

abstract class User {              // 추상 클래스 
  constructor(
    private firstName: string,
    private lastName: string,
    public nickname: string
  ) {}
  abstract getNickName(): string   // 추상 메소드

  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

class Player extends User{
  getNickName(): string {
    return this.nickname
  }

}

const nico = new Player("nico", "las", "니꼬")


// console.log(nico.firstName)
//console.log(nico.lastName)
console.log(nico.nickname)
console.log(nico.getFullName())
