// 크기, 좌표 1

// window.innerWidth  /  window.innerHeight
// 현재 화면(Viewport)의 크기를 얻습니다.

console.log(window.innerWidth)
console.log(window.innerHeight)


// window.scrollX  /  window.scrollY
// 페이지의 좌상단 기준, 현재 화면(Viewport)의 
// 수평, 수직 스크롤 위치를 얻습니다.

console.log(window.scrollX, window.scrollY)


// window.scrollTo()  /  E.scrollTo()
// 지정된 좌표로 대상(화면, 스크롤 요소)을 스크롤합니다.
// 대상.scrollTo(X좌표, Y좌표)
// 대상.scrollTo({ top: Y, left: X, behavior: 'smooth' })

setTimeout(() => {
  window.scrollTo(0, 500)
  window.scrollTo({
    left: 0,
    top: 1500,
    behavior: 'smooth'
  })
}, 1000)

const parentEl = document.querySelector('.parent')
setTimeout(() => {
  parentEl.scrollTo({
    left: 0,
    top: 500,
    behavior: 'smooth'
  })
}, 2000)

