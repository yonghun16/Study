// 정규표현식(RegExp, Regular Expression)

// 정규식.test(문자열) - 이치 여부 반환
// 문자열.match(정규식) - 일치하는 문자의 배열 반환
// 문자열.replace(정규식, 대체문자) - 일치하는 문자를 대체

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

const regexp = /heropy/gi
const regexp2 = /fox/gi

console.log(regexp.test(str))   // false
console.log(str.match(regexp))  // null
console.log(str.replace(regexp2, 'cat'))
