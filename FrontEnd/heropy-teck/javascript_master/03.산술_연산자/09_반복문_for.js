/* 반복문 */

const fruits = ['apple', 'banana', 'orange']

const users = [
  {
    name: 'HEROPY',
    age: 85
  },
  {
    name: 'Neo',
    age: 22
  },
  {
    name: 'Sally',
    age: 18
  }
]

const user = {
  name: 'Heorpy',
  age: 85,
  isVIP: true,
  email: 'JiC0K@example.com'
}


// For 반복문
console.log()
console.log('* For 반복문 *')

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i])
}


// For of 반복문
console.log()
console.log('* For of 반복문 *')

for (let fruit of fruits) {
  console.log(fruit)
}

for (const user of users) {
  console.log(user)
}


// For in 반복문
console.log()
console.log('* For in 반복문 *')

for (let i in fruits) {
  console.log(fruits[i])
}

for (let key in user) {
  console.log(key, user[key])
}
