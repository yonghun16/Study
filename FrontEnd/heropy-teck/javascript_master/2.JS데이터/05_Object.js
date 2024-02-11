/* Object(객체) */

// const user = new Object();   // 생성자 함수 방식으로 객체 데이터 생성
// user.name = 'Heropy';
// user.age = 85;

// function User() {       // 함수 내부에서 객체 데이터 생성
//   this.name = 'Heropy'
//   this.age = 85
// }
// const user = new User()

// const user = {            // 리터럴 방식으로 객체 데이터 생성
//   name: 'Heropy',
//   age: 85
// }
// const keyName = 'name'
// console.log(user.name)     // 점표(.) 표기법
// console.log(user['name'])  // 대괄호 표기법
// console.log(user[keyName])  // 대괄호 표기법



const userA = {
  name: 'Heropy',
  age: 85
}
const userB = {
  name: 'Neo',
  age: 55,
  parent: userA
}
console.log(userB.parent.name)
console.log(userB['parent']['name'])

const users = [userA, userB]
console.log(users[0].name)
