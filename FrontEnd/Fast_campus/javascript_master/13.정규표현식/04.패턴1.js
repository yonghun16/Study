// 정규표현식(RegExp, Regular Expression)

// ^ab         | 줄(Line) 시작에 있는 ab와 일치
// ab$         | 줄(Line) 끝에 있는 ab와 일치
// .           | 임의의 한 문자와 일치
// a|b         | a 또는 b와 일치
// ab?         | b가 없거나 b와 일치

// {3}         | 3개 연속 일치
// {3,}        | 3개 이상 연속 일치
// {3,5}       | 3개 ~ 5개 연속 일치
// +           | 1개 이상 연속 일치

// [ab]        | a 또는 b
// [a-z]       | a부터 z 사이의 문자 구간에 일치(영어 소문자)
// [A-Z]       | A부터 Z 사이의 문자 구간에 일치(영어 대문자)
// [0-9]       | 0부터 9 사이의 숫자 구간에 일치(숫자)
// [가-힣]     | 가부터 힣 사이의 문자 구간에 일치(한글)

// \w          | 63개 문자( Word( 대소영문52개 + 숫자10개 + _ ) )와 일치
// \b          | 63개 문자에 일치하지 않는 문자 경계(Boundary)
// \d          | 숫자와 일치
// \s          | 공백(space, Tab 등) 와 일치

// (?:)        | 그룹 지정
// (?=)        | 앞쪽 일치(Lookahead)
// (?<=)       | 끝쪽 일치(Lookbehind)



const str = `
010-1234-5678
thesecon@gamil.com
Hello world!
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
hello@naver.com
http://localhost:1234
동해물과 백두산이 마르고 닳도록
abbcccddddeeee
`

console.log(str.match(/^h..../gm))        //  h....   // ^줄 시작하는 단어
console.log(str.match(/\.com/g))          //  .com
console.log(str.match(/\.com$/gm))        // [ '.com', '.com' ]
console.log(str.match(/...\.com$/gm))     // [ 'mil.com', 'ver.com' ]

console.log(str.match(/fox|dog|\.com/g))  // [ 'fox', 'dog', '.com', '.com' ]
console.log(str.match(/https?/g))         // [ 'https', 'http' ]     https?에서 s가 있거나 없거나

console.log(str.match(/\d{3}/g))          // 숫자가 연속 3개인 문자열
console.log(str.match(/e{3}/g))           // e가 연속 3개인 문자열
console.log(str.match(/c{3}/g))           // c가 연속 3개인 문자열     // [ 'ccc' ]
console.log(str.match(/b{3}/g))           // b가 연속 3개인 문자열     // null

console.log(str.match(/\d{3,}/g))         // 3개 연속 일치되는 단위 [ '010', '1234', '5678', '7035', '1234' ]
console.log(str.match(/\d{2,3}/g))        // 2~3개 연속 일치되는 단위만

console.log(str.match(/\d{1,}/g))         // 숫자가 1개 이상 연속 일치    [ '010', '1234', '5678', '7035', '60', '1234' ]
console.log(str.match(/\d+/g))            // 숫자가 1개 이상 연속 일치    [ '010', '1234', '5678', '7035', '60', '1234' ]

console.log()
console.log(str.match(/\b[0-9]+\b/g))     //  | [0-9]+ |
console.log(str.match(/\s/g))             //  '\n', '\n', '\n', ' ', '\n',

console.log( str.match(/https?:\/\/(?:\w+\.?)+\/?/g) )       //  [ 'https://www.omdbapi.com/', 'http://localhost' ]

console.log(str.match(/.+(?=과)/g))        // 동해물
console.log(str.match(/.+(?<=과)/g))       // 동해물과
console.log(str.match(/(?<=과).+/g))       //          백두산이 마르고 닳도록


console.log(str.match(/\d{3}-\d{4}-\d{4}/gm))   // 전화번호
