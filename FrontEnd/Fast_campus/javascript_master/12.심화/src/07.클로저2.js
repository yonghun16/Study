const h1El = document.querySelector('h1')
const h2El = document.querySelector('h2')

// 별도의 상태 관리가 필요!
let h1IsRed = false
let h2IsRed = false

h1El.addEventListener('click', () => {
  h1IsRed = !h1IsRed
  h1El.style.color = h1IsRed ? 'red' : 'black'
})
h2El.addEventListener('click', () => {
  h2IsRed = !h2IsRed
  h2El.style.color = h2IsRed ? 'red' : 'black'
})



// Closure  사용
const h3El = document.querySelector('h3')
const h4El = document.querySelector('h4')

// 하나의 함수로 정리!
const createToggleHandler = () => {
  let isRed = false
  return event => {
    isRed = !isRed
    event.target.style.color = isRed ? 'red' : 'black'
  }
}
h3El.addEventListener('click', createToggleHandler())
h4El.addEventListener('click', createToggleHandler())

