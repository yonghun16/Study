// Getter, Setter

class User {
  constructor(first, last) {
    this.firstName = first
    this.lastName = last
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }
  set fullName(value) {
    ;[this.firstName, this.lastName] = value.split(' ')
  }
}

const heopy = new User('Heropy', 'Park')   // 초기값

console.log(heopy.fullName)        // getter를 통해 값을 불러옴

heopy.fullName = 'Jung ManHo'      // setter를 통해 값을 설정

console.log(heopy.fullName)
