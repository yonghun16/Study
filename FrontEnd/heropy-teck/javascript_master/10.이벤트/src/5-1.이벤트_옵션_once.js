// 핸들러 한 번만 실행
// once: ture

const parentEl = document.querySelector('.parent')

parentEl.addEventListener('click', event => {
  console.log('Parent!')
}, {
  once: true
})
