// DOM의 생성, 조회, 수정 2

// N.contains()
// '주어진 노드'가 '노드'의 자식을 포함한 후손인지 확인합니다.
// 노드.contains(주어진_노드)

const parentEl = document.querySelector('.parent')
const childEl = document.querySelector('.child')

console.log(parentEl.contains(childEl))  // true
console.log(document.body.contains(parentEl))  // true
console.log(document.body.contains(childEl))  // true
console.log(document.body.contains(document.body))  // true
console.log(parentEl.contains(parentEl))  // true
console.log(parentEl.contains(document.body))  // false
console.log(childEl.contains(document.body))  // false


// N.textContent
// 노드의 '모든 텍스트'를 얻거나 변경합니다.

const el = document.querySelector('.child')
console.log(el.textContent)
el.textContent = '자식 3'


// E.innerHTML
// 요소의 모든 HTML 내용을 하나의 문자로 얻거나,
// 새로운 HTML을 지정합니다.

const el2 = document.querySelector('.parent')
console.log(el2.innerHTML)
el2.innerHTML = `
  <span style="color: red">Hello</span>
`


// E.dataset
// 요소의 각 `data-` 속성 값을 얻거나 지정합니다.

const el3 = document.querySelector('.child')
const str = 'Hello world!'
const obj = { a: 1, b: 2 } 

el3.dataset.helloWorld = str
el3.dataset.object = JSON.stringify(obj)

console.log(el3.dataset.helloWorld)
console.log(el3.dataset.object)
console.log(JSON.parse(el.dataset.object))


// E.tagName
// 요소의 태그 이름을 반환합니다.

const parentEl4 = document.querySelector('.parent')
const childEl4 = document.querySelector('.child')
const el4 = document.createElement('span')

console.log(parentEl.tagName)
console.log(childEl.tagName)
console.log(el4.tagName)
console.log(document.body.tagName)


// E.id
// 요소의 `id` 속성 값을 얻거나 지정합니다.

const el5 = document.querySelector('.child')
console.log(el5.id)

el5.id = 'child1'
console.log(el5.id)
console.log(el5)


// E.className
// 요소의 `class` 속성 값을 얻거나 변경합니다.

const el6 = document.querySelector('.child')
console.log(el6.className)

el6.className += ' child1 active'
console.log(el6.className)
console.log(el6)
