// prototype

const heropy = {
  firstName: 'Heropy',
  lastName: 'Park',
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const neo = {
  firstName: 'Neo',
  lastName: 'Anderson'
}

console.log(heropy.getFullName())
console.log(heropy.getFullName.call(neo))




function User(first, last) {
  this.firstName = first                    // 함수를 객체처럼 사용 가능하다.
  this.lastName = last
}
User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
}

const heropy2 = new User('Heropy', 'Park')    // 생성자 함수
const neo2 = new User('Neo', 'Anderson')
console.log(heropy2.getFullName())
console.log(neo2.getFullName())
