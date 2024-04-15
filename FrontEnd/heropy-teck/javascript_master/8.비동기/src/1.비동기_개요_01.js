/* 동기와 비동기 */
// 동기(Synchronization)과 비동기(Asynchronous)
// - 동기 : 순차적으로 코드 실행 O
// - 비동기 : 순차적으로 코드 실행 X  

// 비동기 예시1 : 1초 뒤 2를 출력하는 코드가 중간에 있지만, 뒤에 3을 출력하는 코드가 1초를 기다려주지 않고 먼저 실행됨.
console.log(1)
setTimeout(() => { 
  console.log(2)            // 1, 3, 2(1초뒤 출력)
}, 1000) // 비동기 방식
console.log(3)


// 비동기 예시2 : 클릭 코드가 중간에 있지만, 클릭을 기다려 주지 않고, 마지막 코드가 먼저 실행됨
const btnEl = document.querySelector('h1')
btnEl.addEventListener('click', () => {
  console.log('Clicked!')
}) // 비동기 방식

console.log('Hello World!')

