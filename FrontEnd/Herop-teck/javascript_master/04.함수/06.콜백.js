/* 콜백 (Callback) */

const a = callback => {
  callback()   // 인수(콜백으로 받은 함수)를 실행함.
  console.log('A')
}

const b = () => {
  console.log('B')
}
a(b)



// 콜백 Callback
const sum = (a, b, c) => {
  setTimeout(() => {
    c(a + b)
  }, 1000)
}

sum(1, 2, (value) => {
  console.log(value)
})
sum(3, 7, (value)=>{
  console.log(value)
})



// 콜백 Callback 
// https://www.gstatic.com/webp/gallery/4.jpg
//const loadImage = (url, cb) => {
//  const imgEl = document.createElement('img')
//  imgEl.src = url
//  imgEl.addEventListener('load', () => {
//    setTimeout(() => {
//      cb(imgEl)
//    }, 1000)
//  })
//}
//
//const containerEl = document.querySelector('.container')
//containerEl.addEventListener('click', () => {
//  loadImage('https://www.gstatic.com/webp/gallery/4.jpg', imgEl => {
//    containerEl.innerHTML = ''
//    containerEl.append(imgEl)
//  })
//})
