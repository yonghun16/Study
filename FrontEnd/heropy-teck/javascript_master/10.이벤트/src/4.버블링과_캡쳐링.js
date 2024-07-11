// 이벤트 전파(버블) 정지

// event.stopPropagation()는 이벤트 버블을 정지한다.
// capture가 있으면 캡쳐 요소가 먼저 실행되고, 나머지 이벤트가 버블링해서 전파간다.
// capture를 사용 할 때 주의점은 removeEventListener를 사용 할 때도 capture를 동일하게 넣어줘야 한다.

const parentEl = document.querySelector('.parent')
const childEl = document.querySelector('.child')
const anchorEl = document.querySelector('a')

window.addEventListener('click', event => {
  console.log('Window!~')
})
document.body.addEventListener('click', event => {
  console.log('Body!')
})
parentEl.addEventListener('click', event => {
  console.log('Parent!')
}, {capture: true})
childEl.addEventListener('click', event => {
  //event.stopPropagation()   // 버블링 정지!
  console.log('Child!')
})
childEl.addEventListener('click', event => {
  console.log('Anchor!')
})

