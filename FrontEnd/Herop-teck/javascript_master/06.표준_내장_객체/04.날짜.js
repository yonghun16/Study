// Date()
const date1 = new Date()
console.log(date1)

const date2 = new Date(2024, 11, 14, 12, 57, 30)   // 년, 월, 일, 시, 분, 초
console.log(date2)

const date3 = new Date('Fri Dec 03 2024 08:37:45.332Z')
console.log(date3)


// .getFullYear()  .setFullYear()
// 날짜 인스턴스의 '연도'를 반환하거나 지정합니다.

const date4 = new Date()

console.log(date4.getFullYear())   // 2024
date4.setFullYear(2023)
console.log(date4.getFullYear())   // 2023


// .getMonth()   .setMonth()
// 날짜 인스턴스의 '월'를 반환하거나 지정합니다.
// 0부터 시작(Zero-based numbering) 합니다.

const date5 = new Date()

console.log(date5.getMonth())   // 2
date5.setMonth(0)
console.log(date5.getMonth())   // 0


// .getDate()   .setDate()
// 날짜 인스턴스의 '일'를 반환하거나 지정합니다.

const date6 = new Date()

console.log(date6.getDate())   // 31
date6.setDate(1)
console.log(date6.getDate())   // 1


// .getHours()   .setHours()
// 날짜 인스턴스의 '시'를 반환하거나 지정합니다.

const date7 = new Date()

console.log(date7.getHours())   // 15
date7.setHours(1)
console.log(date7.getHours())   // 1


// Date.now()
// '1970-01-01 00:00:00'(유닉스타임)부터 경과한, 
// 메소드가 호출될 때의 '밀리초(ms)'로 반환합니다.

const time = new Date().getTime()
console.log(Date.now())
console.log(time)
