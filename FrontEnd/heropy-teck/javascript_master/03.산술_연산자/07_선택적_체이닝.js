/* 선택적 체이닝 (Optional Chaining) */

const user = undefined

const userA = {
  name: 'HEROPY',
  age: 85,
  address: {
    country: 'Korea',
    city: 'Seoul'
  }
}

const userB = {
  name: 'Neo',
  age: 22
}

function getCity(user) {
  return user.address?.city || '주소 없음'   // '주소 없음'
}

// console.log(user.name)     // error
console.log(user?.name)       // undefined

console.log(getCity(userA))   // Seoul
console.log(getCity(userB))   // 주소 없음

