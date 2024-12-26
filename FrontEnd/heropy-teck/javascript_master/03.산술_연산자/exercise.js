const userB = {
  name: 'Neo',
  age: 22
}

function getCity(user) {
  return user.address?.city || '주소 없음'
}

console.log(getCity(userB))


const arr1 = [1, 2, 3]
const arr2 = [3, 5, 6]
const arr3 = [...arr1, ...arr2]

console.log(arr1.concat(arr2))
console.log(arr3)


const pre = {
  name: 'Song',
  age: 20
}

const after = {
  age: 21,
  habit: 'Coding'
}

console.log(Object.assign({}, pre, after))
console.log({...pre, ...after})


const num3 = null

console.log(num3 ?? 1)

const num1 = 5

console.log( num1 > 10 ? '10보다 크다' : '10보다 작다' )


const array1 = [1, 2, 3]

function isEven(n, m, z) {
  console.log(n % 2 === 0 ? '짝수' : '홀수')
  console.log(m % 2 === 0 ? '짝수' : '홀수')
  console.log(z % 2 === 0 ? '짝수' : '홀수')
}

console.log(isEven(...array1))

