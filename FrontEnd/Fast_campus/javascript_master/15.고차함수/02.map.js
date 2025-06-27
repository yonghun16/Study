// ✅ 레벨 1: 기본 변환


/* ------------------------------------
 * 1. 숫자 제곱 배열 만들기 
-------------------------------------*/
// 입력
const nums = [1, 2, 3, 4];
// 목표 결과
// [1, 4, 9, 16]

// 힌트: 각 숫자를 num * num 으로 변환

const resut1 = nums.map((num) => 
  num*num
)

console.log(resut1)


/* ------------------------------------
  2. 문자열 길이 배열 만들기
-------------------------------------*/
// 입력
const words = ['apple', 'banana', 'kiwi'];

// 목표 결과
// [5, 6, 4]

// 힌트: 문자열의 .length 사용

const wordsLength = words.map((word) =>{
  return word.length;
})

console.log(wordsLength);


// ✅ 레벨 2: 객체 배열 처리

/* ------------------------------------
  3. 이름만 추출하기
-------------------------------------*/

// 입력
const users = [
  { name: 'Neo', age: 85 },
  { name: 'Amy', age: 22 }
];

// 목표 결과
// ['Neo', 'Amy']

// 힌트: 각 요소에서 user.name만 리턴

const onlyName = users.map((user)=>{
  return user.name
})

console.log(onlyName);



/* ------------------------------------
  4. 성인 여부 속성 추가
-------------------------------------*/

// 입력
const people = [
  { name: 'Leo', age: 19 },
  { name: 'Mia', age: 23 }
];

// 목표 결과
/*
[
  { name: 'Leo', age: 19, isAdult: false },
  { name: 'Mia', age: 23, isAdult: true }
]
*/

// 힌트: ...person을 사용해서 객체 복사 후 isAdult 추가

const audultPeople = people.map((person) => {
  return {...person, isAdult : person.age >= 20}
})

console.log(audultPeople)



// ✅ 레벨 3: 형식 바꾸기

/* ------------------------------------
5. 이메일 주소 만들기
-------------------------------------*/

// 입력
const names = ['neo', 'amy'];

// 목표 결과
// ['neo@email.com', 'amy@email.com']

// 힌트: 문자열에 + 또는 템플릿 리터럴 사용

const email = names.map((name) => {
  return `${name}@email.com`
})

console.log(email);


/* ------------------------------------
  6. 날짜 형식 바꾸기
-------------------------------------*/
// 입력
const dates = ['20240625', '20250101'];

// 목표 결과
// ['2024-06-25', '2025-01-01']

// 힌트: substring 또는 slice로 년/월/일 잘라서 연결

const formatedDates = dates.map((date) => {
  const year = date.slice(0, 4)
  const month = date.slice(4, 6)
  const day = date.slice(6, 9)

  return `${year}-${month}-${day}`
})

console.log(formatedDates)


/* ------------------------------------
  7. 점수에 따라 등급 붙이기
-------------------------------------*/
// 입력
const scores = [92, 67, 45];

// 목표 결과
// ['A', 'F', 'F']

// 기준: 90 이상 A, 70 이상 B, 나머지 F

const grade = scores.map((score) => {
  if (score >= 90) {
    return 'A'
  } else if (score >= 70) {
    return 'B'
  } else {
    return 'F'
  }
})

console.log(grade)
