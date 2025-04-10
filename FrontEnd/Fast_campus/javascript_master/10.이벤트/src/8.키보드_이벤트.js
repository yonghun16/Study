// Keyboard Events

// keydown |  키보드 누을 때
// keyup   |  키보드 뗄 때

const inputEl = document.querySelector('input')

inputEl.addEventListener('keydown', event => {
  console.log(event.key)
})
