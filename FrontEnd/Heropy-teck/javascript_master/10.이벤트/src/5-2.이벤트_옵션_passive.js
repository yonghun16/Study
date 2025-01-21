// 기본 동작과 핸들러 실행 분리
// passive: true

const parentEl = document.querySelector('.parent')

parentEl.addEventListener('wheel', () => {
  for (let i = 0; i < 10000; i++) {
    console.log(i)
  }
}, {
  passive: true
})
