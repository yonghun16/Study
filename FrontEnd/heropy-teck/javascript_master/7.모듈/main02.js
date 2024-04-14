/* 코드 내부에서 import 하기 */

// 1초 뒤에 모듈을 가져와서 사용하기
setTimeout(async() => {
  // import('./module.js').then(abc => {
  //   console.log(abc)
  // })
  const abc = await import('./module.js')
  console.log(abc)
}, 1000)
