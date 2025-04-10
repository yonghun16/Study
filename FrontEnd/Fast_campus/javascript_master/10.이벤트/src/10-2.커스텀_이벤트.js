// 커스텀 이벤트 디스패치2
// CustomEvent() : 자바스크립트 내장 이벤트가 아닌 커스텀한 이벤트를 만들 수 있다.
// 실행은 dispatchEvent로 가능

const child1 = document.querySelector('.child:nth-child(1)')
const child2 = document.querySelector('.child:nth-child(2)')

child1.addEventListener('hello-world', event => {
  console.log('커스텀 이벤트 발생!');
  console.log(event.detail)
})

child2.addEventListener('click', () => {
  child1.dispatchEvent(new CustomEvent('hello-world', {
    detail: 123 
  }))
})
