// 이벤트 추가 및 제거

// .addEventListener
// 대상에 이벤트 청취(Listen)를 등록합니다.
// 대상에 지정한 이벤트가 발생했을 때 지정한 함수(Handlerr)가 호출됩니다.

const parentEl = document.querySelector('.parent');
const childEl = document.querySelector('.child');


parentEl.addEventListener('click', () => {
  console.log('Parent!')
})
childEl.addEventListener('click', () => {
  console.log('Child!')
})


// .removeEventListener
// 대상에 이벤트 청취(Listen)을 삭제합니다.
// 대상에 지정한 이벤트가 발생했을 때 지정한 함수(Handlerr)가 실행됩니다.

const handler = () => {
  console.log('Handler!')
}

parentEl.removeEventListener('click', handler)
childEl.removeEventListener('click', () => {
  parentEl.removeEventListener('click', handler)  
})
