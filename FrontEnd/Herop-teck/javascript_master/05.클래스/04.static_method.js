// 정적 메소드(Static Method)
// 정적 매소드는 클래스에서만 쓸 수 있다.
// (객체의 함수호출로 사용 불가)
class User {
  constructor(first, last) {
    this.firstName = first
    this.lastName = last
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
  static isUser(user) {    // 클래스 내에서 사용할 수 있는 정적 메소드 (인스턴스에선 사용 불가)
    if (user.firstName && user.lastName) {
      return true
    }
    return false
  }
}

const heropy = new User('Heropy', 'Park')
const neo = new User('Neo', 'Anderson')
const lewis = {
  name: 'Lewis Yang',
  age: 85
}

console.log(heropy.getFullName())
//console.log(heropy.isUser())     // error
console.log(neo.getFullName())

console.log(User.isUser(heropy))
console.log(User.isUser(lewis))
