/* boolean */
const a = true
const b = false

console.log(typeof(a))

if (a) {
  console.log('a is true')
}
if (b) {
  console.log('b is fasle')
}


/* null */
let age = null   // 명시적(변수의 값이 존재하지 않음을 표시)
console.log(age)

setTimeout(function () {
  age = 85;
  // console.log(age)
}, 1000)


/* undefined */
let age2 = undefined   // 암시적
let age3               // 암시적(자동으로 들어감)
                       // (값이 할당되지 않은 상태임을 표시)
console.log(age2)
console.log(age3)


/* ex */
const user = {
  name: 'HEROPY',
  age: 85,
  email: null
}

console.log(user.name)
console.log(user.age)
console.log(user.email)
console.log(user.abc)
