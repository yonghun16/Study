// 커스텀 이벤트 디스패치1
// dispatchEvent() : DOM 요소에 대해 사용자 정의 이벤트나 기본 이벤트를 수동으로 발생시키는 데 사용되는 메서드

const child1 = document.querySelector('.child:nth-child(1)')
const child2 = document.querySelector('.child:nth-child(2)')

child1.addEventListener('click', (event) => {
  // 강제로 이벤트 발생!
  child2.dispatchEvent(new Event('click'))
  child2.dispatchEvent(new Event('wheel'))
  child2.dispatchEvent(new Event('keydown'))
})
child2.addEventListener('click', () => {
  console.log('Child2 Click!')
})
child2.addEventListener('wheel', () => {
  console.log('Child2 Wheel!')
})
child2.addEventListener('keydown', event => {
  console.log('Child2 Keydown!')
})
