// .length
// 문자 또는 배열의 길이(숫자)를 반환합니다.

const str = 'Hello World!'
console.log(str.length)    // 12


// .includes()
// 대상 문자에 주어진 문자가 포함되어 있는지(불린) 확인합니다.

const str2 = 'Hello World@'
console.log(str2.includes('@'))    // true


// .indexOf()
// 대상 문자에서 주어진 문자와 일치하는 첫 번째 인덱스(숫자)를 반환합니다.
// 일치하는 문자가 없으면 '-1'를 반환합니다.

const str3 = 'Hello World!'
console.log(str3.indexOf('o'))    // 4
console.log(str3.indexOf('@'))    // -1


// .padEnd()
// 대상 문자의 길이(length)가 지정된 길이보다 작으면,
// 주어진 문자를 지정된 길이가지 끝에 붙여 새로운 문자를 반환합니다.

const str4 = '1234567'
console.log(str4.padEnd(10, 'x'))   // 1234567xxx


// .replace()
// 대상 문자에서 패턴(문자, 정규식)과 일치하는 부분을 교체한 새로운 문자를 반환합니다.

const str5 = 'Hello, Hello?!'
console.log(str5.replace('Hello', 'Hi'))    // Hi, Hello?!
console.log(str5.replace(/Hello/g, 'Hi'))   // Hi, Hi?!


// .slice()
// 대상 문자의 일부를 추출해 새로운 문자를 반환합니다.
// 두 번째 인수 직전까지 추출하고, 두 번재 인수를 생략하면 대상 문자의 끝가지 추출합니다.

const str6 = 'Hello World!'
console.log(str6.slice(0, 5))    // Hello
console.log(str6.slice(6))       // World!


// .split()
// 대상 문자를 주어진 구분자로 나눠 배열로 반환합니다.

const str7 = 'Apple, Banana, Orange'
console.log(str7.split(','))


// .toLowerCase()
// 대상 문자를 영어 소문자로 변환해 새로운 문자로 반환합니다.

const str8 = 'Hello World!'
console.log(str8.toLowerCase())


// .toUpperCase()
// 대상 문자를 영어 대문자로 변환해 새로운 문자로 반환합니다.

const str9 = 'Hello World!'
console.log(str9.toUpperCase())


// .trim()
// 대상 문자의 앞뒤 공백 문자(space, tab 등)를 제거한 새로운 문자를 반환합니다.

const str10 = '   Hello World!   '
console.log(str10.trim())
