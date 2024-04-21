// Async / Await

const a = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(1)
      resolve()
    }, 1000)
  })
}
const b = () => console.log(2)

// a().then(() => b())             // 아래의 코드로 대체 가능

const wrap = async () => {         // await 키워드는 async라는 키워드 앞에 붙어 있는 함수 안에서만 쓸 수가 있다.
  await a()
  b()
}
wrap()
