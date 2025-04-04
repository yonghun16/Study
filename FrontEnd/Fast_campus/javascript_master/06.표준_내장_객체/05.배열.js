// .length
// 배열의 길이(숫자)를 반환합니다.

const str = ['A', 'B', 'C']
console.log(str.length)        // 3


// .at()
// 대상 배열을 인덱싱합니다.
// 음수 값을 사용하면 뒤에서부터 인덱싱합니다.

const arr = ['A', 'B', 'C']

console.log(arr[0])              // A
console.log(arr.at(0))           // A
console.log(arr[arr.length - 1]) // C
console.log(arr.at(-1))          // C


// .concat()
// 대상 배열과 주어진 배열을 병합해 새로운 배열을 반환합니다.

const arr1 = ['A', 'B','C']
const arr2 = ['D', 'E','F']
const arr3 = arr1.concat(arr2)
const arr4 = [...arr1, ...arr2]

console.log(arr1)    // ['A', 'B', 'C']
console.log(arr2)    // ['A', 'B', 'C']
console.log(arr3)    // ['A', 'B', 'C', 'D', 'E', 'F'] 
console.log(arr4)    // ['A', 'B', 'C', 'D', 'E', 'F'] 


// .every()
// 대상 배열의 모든 요소가 콜백 테스트에서 참(Truthy)을 반환하는지 확인합니다.

const arr5 = [1, 2, 3, 4]
const isVailid = arr5.every(num => num < 5)

console.log(isVailid)    // true


// .filter()
// 주어진 콜백 테스트를 통과(참(Truthy)을 반환)하는 모든 요소를 새로운 배열로 반환합니다.
// 모든 요소가 테스트를 통과하지 못하면 빈 배열을 반환합니다.

const number = [1, 20, 7, 9, 104, 0, 58]
const filteredNumbers = number.filter(number => number < 30)

console.log(filteredNumbers)    // [1, 20, 7, 9, 0]

const user = [
  { name: 'Kim', age: 93 },
  { name: 'Lee', age: 9 },
  { name: 'Park', age: 12 },
]

const adults = user.filter(user => user.age >= 19)
console.log(adults)   // [ { name: 'Kim', age: 93 } ]
