// 이벤트 객체

// 이벤트 객체는 대상에서 발생한 이벤트 정보를 담고 있습니다.
// 예를들어 마우스 이벤트 객체에는 마우의 이벤트 정보를 가지고 있습니다.
// click, wheel 등

const parentEl = document.querySelector('.parent')

parentEl.addEventListener('click', event => {
  console.log(event.target, event.currentTarget)
  console.log(event)
})
parentEl.addEventListener('wheel', event => {
  console.log(event)
})

const inputEl = document.querySelector('input')

// key를 누를 때 마다 event콜백 함수를 실행한다.
inputEl.addEventListener('keydown', event => {
  console.log(event.key)
})