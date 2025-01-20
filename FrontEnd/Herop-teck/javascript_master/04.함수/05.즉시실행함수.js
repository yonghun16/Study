/* 즉시실행함수 (IIFE, Immediately Invoked Function Expression) */

const a = 7

const double = () => {
  console.log(a * 2)
}
double()

;(() => {
  console.log(a * 2)
})()

;(() => {})()         // (F)()
;(function () {})()   // (F)()
;(function () {}())   // (F())
;!function () {}()    // !F()
;+function () {}()    // +F()


;( () => { console.log(a * 2) } )()       // (F)()
;(function () { console.log(a * 2) })()   // (F)()
;(function () { console.log(a * 2) }())   // (F())
;!function () { console.log(a * 2) }()    // !F()
;+function () { console.log(a * 2) }()    // +F()


// 심화 (매개 변수 넣기)
//;((a, b) => {
//  console.log(a.innerWidth)
//  console.log(b.body)
//})(window, document)    // 외부의 변수를 내부의 변수의 이름으로 사용 가능
