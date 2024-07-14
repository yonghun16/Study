// 기본 동작과 핸들러 실행 분리
// passive: true
// 핸들러의 복잡한 실행과 화면상의 기본동작의 처리를 각각 처리(분리)하게 하여 
// 기본 동작의 속도의 저하를 막음

const parentEl = document.querySelector('.parent')

parentEl.addEventListener('wheel', () => {
  for (let i = 0; i < 10000; i++) {
    console.log(i)
  }
}, {
  passive: true
})
