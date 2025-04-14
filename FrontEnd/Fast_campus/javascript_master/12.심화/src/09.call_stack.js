// Web APIs에서 제공하는 기능은
// JS에서 기본으로 동작하는 기능이 다 끝나고 나서야
// 이벤트 루프에 의해 호출되어 동작한다.
// 아래 코드는 2가 1000번 출력후 1이 출력된다.

setTimeout(() => {
  console.log(1)
}, 0);

for (let i=0; i<1000; i++) {
  console.log(2)
}

