// 콜백(Callback) 패턴
// 콜백 패턴을 통해 숫자 1이 먼저 출력되도록 할 수 있다.

const a = (callback) => {      // callback b()에 심는다. 
  setTimeout(() => {
    console.log(1)
    callback()                 // b()
  }, 1000)
}
const b = (callback) => { 
  setTimeout(() => {
    console.log(2)
    callback()
  }, 1000)
}

const c = (callback) => {
  setTimeout(() => {
    console.log(3)
    callback()
  }, 1000)
}

const d = () => {
  console.log(4)
}

// callback를 중첩하면 작성하기도 불편하고 해석하기도 불편하다.
// 이를 '콜백 지옥'이라고 표현한다. (개미지옥처럼 파고들어가는 코드 형태)
a(() => {
  b(() => {
    c(() => {
      d()
    })
  })
})

