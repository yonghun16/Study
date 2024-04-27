// document.getByElementById()

// HTML 'id' (Attribute) 값으로 검색한 요소를 반환합니다.
// 여러 요소가 검색되면, 가장 먼저 찾은 값을 반환합니다.
// 검색결과가 없으면 null을 반환합니다.

const el = document.getElementById('child2')
console.log(el)


// document.querySelector()
// 'CSS 선택자'를 사용하여 요소를 반환합니다.
// 여러 요소가 검색되면, 가장 먼저 찾은 값을 반환합니다.
// 검색결과가 없으면 null을 반환합니다.

const el2 = document.querySelector('.child')
console.log(el2)


// document.querySelectorAll()
// 'CSS 선택자'로 모든 검색 내용을 'NodeList'로 반환합니다.
// 'NodeList' 객체는 .foreach()를 사용할 수 있습니다.

const nodeList = document.querySelectorAll('.child')
console.log(nodeList)
nodeList.forEach(el => console.log(el.textContent))
console.log(Array.from(nodeList))                 // 유사배열을 배열로 변환
Array.from(nodeList).forEach(el => console.log(el.textContent))  


// N.parentElement
// 노드의 부모 요소을 반환합니다.

const el3 = document.querySelector('.child')
console.log(el3.parentElement)


// E.closest()
// '자신을 포함'한 조상 요소 중 'CSS 선택자'와 일치하는 가장 가까운 요소를 반환합니다.
// 요소를 찾지 못하면 'null'을 반환합니다.

const el4 = document.querySelector('.child')
console.log(el4.closest('div'))
console.log(el4.closest('body'))
console.log(el4.closest('.hello'))


// N.previousSibling,  N.nextSibling
// 노드의 이전 형제 혹은 다음 형제 노드를 반환 합니다.

const el5 = document.querySelector('.child')
console.log(el5.previousSibling)
console.log(el5.nextSibling)


// E.children
// 요소의 모든 자식 요소를 반환합니다.

const el6 = document.querySelector('.parent')
console.log(el6.children)


// E.firstElementChild,  E.lastElementChild
// 요소의 첫 번째 자식 요소나 마지막 자식 요소를 반환합니다.

const el7 = document.querySelector('.parent')
console.log(el7.firstElementChild)
console.log(el7.lastElementChild)
