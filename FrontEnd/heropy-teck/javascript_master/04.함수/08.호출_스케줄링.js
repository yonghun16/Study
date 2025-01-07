/* 호출 스케쥴링 (scheduling a function call) */

const hello = () => {
  console.log("hello~")
}

const timeout = setInterval(hello, 1000)

const h1El = document.querySelector('h1')
h1El.addEventListener('click', () => {
  console.log('Clear!')
  clearInterval(timeout)
})
