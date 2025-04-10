// Mouse & Pointer Events

// click         |  클릭했을 때
// dblclick      |  더블 클릭했을 때
// mousedown     |  버튼을 누를 때
// mouseup       |  버튼을 뗄 때
// mouseenter    |  포인터가 요소 위로 들어갈 때
// mouseleave    |  포인터가 요소 밖으로 나올 때
// mousemove     |  포인터가 움직일 때
// contextmenu   |  우 클릭 했을 때
// wheel         |  휠 버튼이 회전할 때

const parentEl = document.querySelector('.parent')
const childEl = document.querySelector('.child')

childEl.addEventListener('mousedown', () => {
  childEl.classList.add('active')
})

childEl.addEventListener('mouseup', () => {
  childEl.classList.remove('active')
})

childEl.addEventListener('mousemove', (event) => {
  console.log(event.clientX, event.clientY)
})
