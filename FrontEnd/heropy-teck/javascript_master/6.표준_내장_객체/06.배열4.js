// .reverse()
// 대상 배열의 순서를 반전합니다.
// 대상 배열 원본이 변경됩니다.

const arr = ['A', 'B', 'C']
const reversed = arr.reverse()
console.log(reversed)
console.log(arr)



// .shift()
// 대상 배열에서 첫 번재 요소를 제거하고, 제거된 요소를 반환합니다.
// 대상 배열 원본이 변경됩니다.

const arr2 = ['A', 'B', 'C']
const shifted = arr2.shift()
console.log(shifted)
console.log(arr2)



// .slice()
// 대상 배열의 일부를 추출해 새로운 배열을 반혼합니다.
// 두 번째 인수 직전까지 추출하고,
// 두 번째 인수를 생략하면 대상 배열의 끝가지 추출합니다.
// 원본이 변경되지 않습니다.

const arr3 = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
//             0    1    2    3    4    5    6
//             0   -6   -5   -4   -3   -2   -1
console.log(arr3.slice(0, 3))
console.log(arr3.slice(4, -1))    // 슬라이스에 음수를 넣게 되면 마지막 부분부터 시작한다.
console.log(arr3.slice(4))
console.log(arr3)



// .some()
// 대상 배열의 '요소 중 단 하나'라도 콜백 테스트를 통과하는지 확인합니다.

const arr4 = [1, 2, 3, 4]
const isValid = arr4.some(item => item > 3)
console.log(isValid)        // true



// .sort()
// 대상 배열을 콜백의 반환 값(음수, 양수, 0)에 따라 정렬합니다.
// 콜백을 제공하지 않으면, 요소를 문자열로 변환하고 유니코드 코드 포인트 순서로 정렬합니다.
// 대상 배열 원본이 변경됩니다.

// .sort() 예제 1
const numbers = [4, 17, 2, 103, 3, 1, 0]

numbers.sort()                  // 요소를 문자열로 변환, 유니코드 순으로 정렬
console.log(numbers)

numbers.sort((a, b) => a - b)   // 오름차순
console.log(numbers)

numbers.sort((a, b) => b - a)   // 내림차순
console.log(numbers)

// .sort() 예제 2
const users = [
  { name: 'Neo', age: 85 },
  { name: 'Amy', age: 22 },
  { name: 'Lewis', age: 11 }
]

users.sort((a, b) => a.age - b.age)   // 나이 오름차순
console.log(users)



// .splice()
// 대상 배열에 요소를 '추가'하거나 '삭제'하거나 '교체'합니다.
// 대상 배열 원보이 변경됩니다.

const arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//            0  1  2  3  4  5  6  7  8
arr5.splice(2, 0, 'A', 'B')      // (추가) 2번째 index 다음부터 아무것도 삭제하지 않고, 'A', 'B' 추가
console.log(arr5)
arr5.splice(6, 1, 'D')           // (교체) 6번째 index 다음부터 1개 삭제, 'D' 추가
console.log(arr5)
arr5.splice(9, 2)                // (삭제) 9번째 index 다음부터 2개 삭제
console.log(arr5)



// .unshift()
// 새로운 요소를 대상 배열의 맨 앞에 추가하고 새로운 배열의 길이를 반환합니다.
// 대상 배열 원본이 변경됩니다.

const arr6 = ['A', 'B', 'C']
arr6.unshift('D')
console.log(arr6)



// .Array.from()
// 유사 배열(Array-like)을 실제 배열로 반환합니다.

const arraylike = {
  0: 'A',
  1: 'B',
  2: 'C',
  length: 3                     // .Array.from()을 쓰기 위해서는 length: 속성도 제공을 해야 한다.
}
console.log(arraylike.constructor === Array)
console.log(arraylike.constructor === Object)
// arraylike.forEach(item => console.log(item))
Array.from(arraylike).forEach(item => console.log(item))



// Array.isArray()
// 배열 데이터인지 확인합니다.

const array2 = [1, 2, 3]
const arraylike2 = {
  0: 'A',
  1: 'B',
  2: 'C',
  length: 3
}
console.log(Array.isArray(array2))        // true
console.log(Array.isArray(arraylike2))    // false
