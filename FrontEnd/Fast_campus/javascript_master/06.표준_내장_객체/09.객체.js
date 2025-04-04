// Object.assign()
// 하나 이상의 출처(Source) 객체로부터 대상(Target) 객체로 속성을 복사하고 대상 객체를 반환합니다.
// 뒤에 있는 인자와 앞에 있는 인자의 key가 같으면 뒤에 있는 인자의 key로 덮어씌워진다.
// 객체 병합

const target = { a: 1, b: 2 }
const source1 = { b: 3, c: 4 }
const source2 = { c: 3, d: 4 }
const result = Object.assign(target, source1, source2)
// const result = Object.assign({}, target, source1, source2)      // 객체 복사, 원본 손상 없음

console.log(target)
console.log(result)



// Object.entries()
// 주어진 객체의 각 속성과 값으로 '하나의 배열'로 만들어 요소로 추가한 '2차원 배열'을 반환합니다.

const user = {
  name: 'Heropy',
  age: 85,
  isValid: true,
  email: 'thesecon@gmail.com'
}

console.log(Object.entries(user))                         // 객체를 2차원 배열로 풀어서 출력함.

for (const [key, value] of Object.entries(user)) {        // 구조 분해 할당을 통해 반복문 실행
  console.log(key, value)
}



// Object.keys()
// 주어진 객체의 속성 이름을 나열한 배열을 반환합니다.

const user2 = {
  name: 'Heropy',
  age: 85,
  isValid: true,
  email: 'thesecon@gmail.com'
}

console.log(Object.keys(user2))



// Object.values()
// 주어진 객체의 속성 값을 나열한 배열을 반환합니다.

const user3 = {
  name: 'Heropy',
  age: 85,
  isValid: true,
  email: 'thesecon@gmail.com'
}

console.log(Object.values(user3))
