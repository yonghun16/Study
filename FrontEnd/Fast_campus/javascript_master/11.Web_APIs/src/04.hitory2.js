// history2

/* Array.prototype.find()
 *
 * const result = array.find(callback)
 * const numbers = [1, 3, 5, 8, 10]
 * const firstEven = numbers.find(num => num % 2 === 0)
 *
 * console.log(firstEven) // 👉 8
*/

/* popstate 이벤트란?
 - 브라우저 히스토리(뒤로/앞으로 이동 등)에 변화가 생길 때 발생하는 이벤트입니다.
*/

const page1 = /* html */
  `
  <section class="page1">
    <h1>Page 1</h1>
    <p>Page 1 content</p>
  </section>
  `
const page2 = /* html */
  `
  <section class="page2">
    <h1>Page 2</h2>
    <p>Page 2 content</p>
  </section>
  `
const page3 = /* html */
  `
  <section class="page3">
    <h2>Page 3</h2>
    <p>Page 3 content</p>
  </section>
  `
const pageNotFound = /* html */
  `
  <section>
    <h1>404 Page Not Found!</h1>
  </section>
  `

const pages = [
  { path: '#/page1', template: page1 },
  { path: '#/page2', template: page2 },
  { path: '#/page3', template: page3 }
]

const appEl = document.querySelector('#app')

const render = () => {
   console.log(history)
  const page = pages.find(page => page.path === location.hash)
  appEl.innerHTML = page
    ? page.template
    : pageNotFound
}

window.addEventListener('popstate', render)
render()

const pagePush = num => {
  history.pushState(`전달할 데이터 - ${num}`, null, `#/page${num}`)
  render()
}

const inputEl = document.querySelector('nav input')
inputEl.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    pagePush(event.target.value)
  }
})
