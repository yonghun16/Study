// 크기, 좌표 2

// E.clientWidth  /  E.clientHeight
// 테두리 선(border)을 제외한 요소의 크기를 얻습니다.

const parentEl = document.querySelector('.parent')
const childEl = document.querySelector('.child')

console.log(parentEl.clientWidth, parentEl.clientHeight)
console.log(childEl.clientWidth, childEl.clientHeight)


// E.offsetWidth  /  E.offsetHeight
// 테두리 선(border)을 포함한 요소의 크기를 얻습니다.

const parentEl2 = document.querySelector('.parent')
const childEl2 = document.querySelector('.child')

console.log(parentEl2.offsetWidth, parentEl.offsetHeight)
console.log(childEl2.offsetWidth, childEl.offsetHeight)


// E.scrollLeft  /  E.scrollTop
// 스크롤 요소의 좌상단 기준,
// 현재 스크롤 요소의 수평 혹은 수직 스크롤 위치를 얻습니다.

window.parentEl3 = document.querySelector('.parent')
console.log(parentEl3.scrollLeft, parentEl3.scrollTop)


// E.offsetLeft  /  E.offsetTop
// 페이지의 좌상단 기준, 요소의 위치를 얻습니다.

const parentEl4 = document.querySelector('.parent')
const childEl4 = document.querySelector('.child')

console.log(parentEl4.offsetLeft, parentEl4.offsetTop)
console.log(childEl4.offsetLeft, childEl4.offsetTop)


// E.getBoundingClientRect()
// 테두리 선(border)을 포함한 요소의 크기와
// 화면에서의 '상대 위치' 정보를 얻습니다.
// 사용자가 보는 화면에 위치에 따라서, 상황마다 요소의 다른 위치 정보가 필요한 경우에 유용하게 사용 할 수 있음.

const parentEl5 = document.querySelector('.parent')
const childEl5 = document.querySelector('.child')
console.log(parentEl5.getBoundingClientRect())
console.log(childEl5.getBoundingClientRect())
