/* Object(객체) */

const user1 = new Object();     // 생성자 함수 방식으로 객체 데이터 생성
user1.name = 'Heropy';
user1.age = 85;

function User2() {              // 함수 내부에서 객체 데이터 생성
  this.name = 'Heropy'
  this.age = 85
}

const user2 = new User2()
const user3 = {                 // 리터럴 방식으로 객체 데이터 생성
  name: 'Heropy',
  age: 85
}

const keyName = 'name'
console.log(user1.name)         // 점표(.) 표기법
console.log(user2['name'] )     // 대괄호 표기법
console.log(user3[keyName])     // 대괄호 표기법


// 표기법의 활용
const userA = {
  name: 'Heropy',
  age: 85
}
const userB = {
  name: 'Neo',
  age: 55,
  parent: userA
}
console.log(userB.parent.name)        // userA.name가 출력 되므로 heropy
console.log(userB['parent']['name'])  // heropy

const users = [userA, userB]
console.log(users[0].name)            // heropy
