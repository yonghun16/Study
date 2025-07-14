// 클래스

// 접근 제어자(access modifiers)
// - public    : 어디서나 자유롭게 접근 가능, 클래스 바디에서 생략 가능,  매개변수에서 선언 시 생략 불가능
// - protected : 나와 파생된 후손 클래스 내에서 접근 가능
// - private   : 내 클래스에서만 접근 가능

class UserA_14 {
  // public first: string = ''
  // protected last: string = ''
  // private age: number = 0
  constructor(public first: string, protected last: string, private age: number) {
    this.first = first
    this.last = last
    this.age = age
  }
  getAge() {
    return `${this.first} ${this.last} is ${this.age}`
  }
}

class UserB_14 extends UserA_14 {
  getAge() {
    return `${this.first} ${this.last} is ${this.age}`
  }
}

class UserC_14 extends UserB_14 {
  getAge(){
    return `${this.first} ${this.last} is ${this.age}`
  }
}


const neo_14: UserA_14 = new UserA_14('Neo', 'Neo', 22)
const heropy_14: UserB_14 = new UserB_14('Heropy', 'Neo', 85)
const heopy_14: UserC_14 = new UserC_14('Heopy', 'Neo', 85)

console.log(neo_14.first)
console.log(neo_14.last)
console.log(heopy_14.getAge())
