/* 선택적 체이닝 (Optional Chaining) */

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

console.log(getCity(userA))
console.log(getCity(userB))