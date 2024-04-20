// Promise

const a = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(1)
      resolve()
    }, 1000)
  })
}

const b = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(2)
      resolve()
    }, 1000)
  })
}

const c = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(3)
      resolve()
    }, 1000)
  })
}

const d = () => console.log(4)

// a().then(() => {
//   b().then(() => {
//     c().then(() => {
//       d()
//     })
//   })
// })

// a().then(() => {
//   return b()          // promise 인스턴스를 반환하게 되면 그 then 메소드의 메소드 체이닝으로 이어서 then 메소드를 쓸 수 있다.
// }).then(() => {
//   return c()
// }).then(() => {
//   d()
// })

// a().then(() => b()).then(() => c()).then(() => { d() })    // return이 1줄이면 생략 가능

// a().then(() => b())      // 줄바꿈 및 정리
//    .then(() => c())
//    .then(() => {
//      d()
//    })

a()
  .then(b)       // 콜백으로 받는 resolve가 함수 이므로 함수 자체를 전달하면 간편
  .then(c)
  .then(d)
