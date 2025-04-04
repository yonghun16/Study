// ES6 Classes

// 함수를 사용하는 방법
// 1) 일반 함수 선언으로 객체를 만들고 
// 2) 만들어진 객체의 프로토 타입에 메소드(함수)를 추가하는 방법
// function User(first, last) {
//   this.firstName = first
//   this.lastName = last
// }
// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`
// }

// ES6의 클래스를 이용하는 방법
// 1) 클래스로 객체를 선언하고 
// 2) 선언하는 김에 메소드도 같이 만듬
class User {
  constructor(first, last) {
    this.firstName = first
    this.lastName = last
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const heropy = new User('Heropy', 'Park')
const neo = new User('Neo', 'Anderson')

console.log(heropy.getFullName())
console.log(neo)
