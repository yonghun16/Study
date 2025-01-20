// DOM의 생성, 조회, 수정 3

// E.classList
// 요소의 `class` 속성 값을 제어합니다.
//
// - `.add()` : 새로운 값을 추가
// - `.remove()` : 기존 값을 제거
// - `.toggle()` : 값을 토글
// - `.contains()` : 값을 확인

const el = document.querySelector('.child')

el.classList.add('active')
console.log(el.classList.contains('active'))

el.classList.remove('active')
console.log(el.classList.contains('active'))

el.addEventListener('click', () => {
  el.classList.toggle('active')
  console.log(el.classList.contains('active'))
})


// E.style
// 요소의 `style` 속성(인라인 스타일)의 CSS속성 값을 얻거나 변경할 수 있습니다.

const el2 = document.querySelector('.child')
const el3 = document.querySelector('.child2')

// 개별 지정!
el2.style.width = '100px'
el2.style.fontSize = '20px'
el2.style.backgroundColor = 'green'

// 한번에 지정!
Object.assign(el3.style, {
  width: '100px',
  fontSize: '20px',
  backgroundColor: 'red',
})

console.log(el2.style)
console.log(el2.style.width)
console.log(el2.style.fontSize)
console.log(el2.style.backgroundColor)


// window.getComputedStyle()
// 요소에 적용된 스타일 객체를 반환합니다.

const el4 = document.querySelector('.child')
const styles = window.getComputedStyle(el4)

console.log(styles.width)
console.log(styles.fontSize)
console.log(styles.backgroundColor)


// E.getAttribute()  /  E.setAttribute()
// 요소에서 특정 속성 값을 얻거나 지정합니다.

const el5 = document.querySelector('.child')
el5.setAttribute('title', 'Hello World!!!')
console.log(el.getAttribute('title'))


// E.hasAttribute()  / E.removeAttribute()
// 요소에서 특정 속성을 확인하거나 제거합니다.

const el6 = document.querySelector('.child')
console.log(el6.hasAttribute('class'))
el6.removeAttribute('class')
console.log(el6.hasAttribute('class'))
console.log(el6)
