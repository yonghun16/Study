// DOM의 생성, 조회, 수정 1

// document.createElement()
// 메모리에만 존재하는 새로운 HTML 요소를 생성해 반환합니다.
// 당장 브라우저에는 출력하지 않음. 기타 메소드를 통해서 HTML구조에 삽입 가능

const divEl = document.createElement('div')
console.log(divEl)

const inputEl = document.createElement('input')
console.log(inputEl)


// E.prepend()  /  E.append()
// 노드를 요소의 첫 번째 혹은 마지막 '자식'으로 '삽입'합니다.

const parentEl = document.querySelector('.parent')
const el = document.createElement('div')       // 생성한 div요소를 el상수에 할당
el.textContent = 'hello~'                      // el요소의 텍스트를 'hello~'로 변경

parentEl.prepend(new Comment(' 주석2 '))
parentEl.append(el)                            // el요소를 parentEl에 뒤에 자식요소로 추가
parentEl.append('Text1!', 'Text2!')


// E.remove()
// 요소를 제거 합니다.
const el2 = document.querySelector('.child')
el2.remove()


// E.insertAdjacentElement()
// '대상 요소'의 지정한 위치에 '새로운 요소'를 삽입합니다.
// 대상_요소.insertAdjacentElement(위치, 새로운_요소)

// /* html */
// <!-- 'beforebegin' -->
// <div class="target">       // <- begin 지점
//   <!-- 'afterbegin' -->
//   Content!
//   <!-- 'beforeend' -->
// </div>                     // <- end 지점
// <!-- 'afterend' -->

const childEl = document.querySelector('.child')    // target이 될 요소
const newEl = document.createElement('span')
newEl.textContent = 'Hello~ insertAdjacentElement()'
childEl.insertAdjacentElement('beforebegin', newEl)  // target의 begin지점 전에 newEl요소 삽입


// N.insertBefore()
// '부모 노드'의 자식인 '참조 노드'의 이전 형제로 '노드'를 삽입합니다.
// ('부모 노드'내부에서 '참조 노드' 바로 이전에 'target 노드' 삽입)
// 부모_노드.insertBefore(삽입할_노드, 참조_노드)
// 요소가 아닌 노드에 대한 메소드이기에 텍스트나 주석도 삽입이 가능하다.

const parentEl2 = document.querySelector('.parent')
const childEl2 = document.querySelector('.child')
const newEl2 = document.createElement('div')
newEl2.textContent = 'hello~ N.inserBefore()'
parentEl2.insertBefore(newEl2, childEl2)
