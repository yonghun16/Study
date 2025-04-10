// console
// .log(), .warn(), .error(), .dir()
// 콘솔에 메시지나 객체를 출력합니다.
// - log: 일반 메시지
// - warn: 경고 메시지
// - error: 에러 메시지
// - dir: 속성을 볼 수 있는 객체를 출력
console.log(document.body);
console.warn(document.body);
console.error(document.body);
console.dir(document.body);


// .count(), .countReset()
// 콘솔에 메소드 호출의 누적 횟수를 출력하거나 초기화 합니다.
// console.count('이름')
// console.countReset('이름')
console.count('a')
console.count('a')
console.count('a')
console.log('Rest a!')
console.countReset('a')
console.count('a')
console.count('a')


// .time(), .timeEnd()
// 콘솔에 타이머가 시작해서 종료되기까지의 시간(ms)을 출력합니다.
// console.time('이름')
// console.timeEnd('이름')
console.time('반복문')

for (let i = 0; i < 10000; i += 1) {
  console.log(i);
}

console.timeEnd('반복문')


// .trace()
// 메소드 호출 스택(Call Stack)을 추적해 출력합니다.
function a() {
  function b() {
    function c() {
      console.log('Log!')
      console.trace('Trace!')  // c함수 내부라는 표시
    }
    c()    // b함수 내부라는 표시
  }
  b() // a함수 내부라는 표시
}
a() // 익명함수 내부라는 표시 


// .clear()
// 콘솔에 기록된 메시지를 모두 삭제합니다.
// console.clear()


// 서식 문자 치환
// %s - 문자로 적용
// %o - 객체로 적용
// %c - CSS를 적용
const aa = 'The brown fox'
const bb = 3
const cc = {
  f : 'fox',
  d : 'dog'
}
console.log('%s %s %o', aa, bb, cc)
console.log(
  '%c the CSS style',
  'color: orange; font-weight: bold; font-size: 20px',
)
