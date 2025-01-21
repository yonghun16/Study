/* 동기와 비동기 */

// fatch는 특정한 웹 주소로 데이터를 요청(request)할 때 사용한다.
// 요청을 받으면 omdbapi.com은 응답(response)을 한다.
// 요청과 응답에서는 '시간'이 필요하다. 만약에 이 시간이 오래 걸리면 다음 코드는 실행되지 않는다.
// 언제 올 지 모르는 응답을 기다리지 않고, 다음 코드를 먼저 실행한다.
// 결과적으로 순서대로 동작하지 않지만, 전체 코드는 빠르게 실행된다.
fetch ('https://www.omdbapi.com/?apikey=7035c60c&s=avengers')
  .then(res => res.json())
  .then(res => console.log(res))

console.log(1)
console.log(2)
console.log(3)
