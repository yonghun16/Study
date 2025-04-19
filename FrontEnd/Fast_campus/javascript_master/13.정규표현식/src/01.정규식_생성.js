// 정규표현식(RegExp, Regular Expression)

// - 문자 검색(Search)
// - 문자 대체(Replace)
// - 문자 추출(Extract)

// 1. 생성자 방식
// new RegExp('표현', '옵션')
// new RegExp('[a-z]', 'gi')

// 2. 리터럴 방식
// /표현/옵션
// /[a-z]/gi

// 3. 리터럴 방식 VS 생성자 방식
// - /abc\// : 리터럴에서는 /가 정규식의 경계라서 문자 /를 쓰려면 \/로 escape
// - new RegExp('abc/') : 생성자에서는 그냥 문자열이니깐 /를 escape 할 필요가 없음.

// 4. 옵션들
// g : global - 전체 찾기
// i : ignoreCase - 대소문자 무시
// m : multiLine - 여러 줄 모드. ^, $ 각각 줄의 시작과 끝을 의미
// s : dotAll - .이 줄바꿈 문자(\n) 포함한 모든 문자와 일치
// u : Unicode - 유니코드 모드.
// y : sticky - 현재 검색 위치에서만 일치하도록 함.


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

const regexp = new RegExp('the', 'gi')
console.log(str.match(regexp))  // the, The, the

const regexp2 = /the/gi
console.log(str.match(regexp2))  // the, The, the
