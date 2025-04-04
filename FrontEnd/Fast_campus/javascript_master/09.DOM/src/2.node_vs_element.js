// 예제 1 : '요소'는 '노드'로부터 상속받은 객체
const parent = document.querySelector('.parent')

// 부모 요소의 모든 자식 '노드' 확인
console.log(parent.childNodes);      // prototype : NodeList

// 부모 요소의 모든 자식 '요소' 확인
console.log(parent.children);        // prototype : HTMLCollection

//console.dir(parent)


// 예제 2 : '노드'는 '요소'로부터 상속받은 객체
class N {}
class E extends N {}

console.dir(E)
console.dir(N)
console.dir(E.__proto__)

console.dir(Element)
console.dir(Node)
console.dir(Element.__proto__)
