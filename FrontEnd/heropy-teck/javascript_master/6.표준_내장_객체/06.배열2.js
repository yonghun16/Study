// .find()
// 대상 배열에서 콜백 테스트를 통과하는 첫 번째 요소를 반환합니다.

const arr = [5, 8, 130, 12, 44]
const foundItem = arr.find(item => item > 10)
console.log(foundItem)     // 130

const users = [
  { name: 'Neo', age: 85 },
  { name: 'Amy', age: 22 },
  { name: 'Lewis', age: 11 }
]
const foundUser = users.find(user => user.name === 'Amy')
console.log(foundUser)     // { name: 'Amy', age: 22 }



// .findIndex()
// 대상 배열에서 콜백 테스트를 통과하는 첫 번째 요소의 인덱스를 반환합니다.

const arr2 = [5, 8, 130, 12, 44]
const foundIndex = arr2.findIndex(item => item > 10)
console.log(foundIndex)    // 2



// .flat()
// 대상 배열의 모든 하위 배열을 지정한 깊이(Depth)가지 '이어붙인' 새로운 배열을 생성합니다.
// 깊이의 기본값은 '1'입니다.
// 모든 깊이의 값은 'Infinity'입니다.

const arr3 = [1, 2, [3, 4, [5, 6]]]
console.log(arr3.flat())             // [1, 2, 3, 4, [5, 6]]
console.log(arr3.flat(2))            // [1, 2, 3, 4, 5, 6]
console.log(arr3.flat(Infinity))     // [2, 2, 3, 4, 5, 6]



// .forEach()
// 대상 배열의 길이만큼 주어진 콜백을 실행합니다.

const arr4 = ['A', 'B', 'C']
arr4.forEach(item => console.log(item))



// .includes()
// 대상 배열이 특정 요소를 포함하고 있는지 확인합니다.

const arr5 = ['A', 'B', 'C']
console.log(arr5.includes('A'))    // true
console.log(arr5.includes('D'))    // false

const users2 = [
  { name: 'Neo', age: 85 },
  { name: 'Amy', age: 22 },
  { name: 'Lewis', age: 11 }
]

console.log(users2.includes({ name: 'Neo', age: 85 }))    // false
const neo = users2[0]
console.log(users2.includes(neo))      // true , includes()의 인자는 '참조형' 변수를 받는다.


