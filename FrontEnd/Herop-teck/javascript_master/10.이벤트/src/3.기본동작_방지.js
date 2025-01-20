// 기본 동작 방지
// 브라우저에서 기본적으로 들어 있는 동작이 만약에 필요하지 않을 때 그것을 사용하지 않으려면 이벤트의 preventDefault() 메소드를 이벤트의 콜백 내부에서 실행한다.

// 마우스 휠의 스크롤 동작 방지

const parentEl = document.querySelector('.parent')

// 마우스 휠을 이벤트 등록 후, 휠의 기본 동작 방지
parentEl.addEventListener('wheel', event => {
  event.preventDefault()
  console.log("Wheel!")
})

// <a> 태그에서 페이지 이동(기봉 동작) 방지!
const anchorEl = document.querySelector('a')
anchorEl.addEventListener('click', event => {
  event.preventDefault()
  console.log("Click!")
})
