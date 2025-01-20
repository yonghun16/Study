// Resolve, Reject 그리고 에러 핸들링3 - async, await 적용

const delayAdd = index => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (index > 10) {
        reject(`${index}는 10보다 클 수 없습니다.`)
        return
      }
      console.log(index)
      resolve(index + 1)
    }, 1000)
  })
}

// delayAdd(2)
//   .then(res => console.log(res))        // resolve 호출
//   .catch(err => console.error(err))     // reject 호출
//   .finally(() => console.log('done!'))  // resolve, reject에 상관 없이 항상 실행

const wrap = async () => {
  try {                                    // resolve
    const res = await delayAdd(2)
    console.log(res)
  } catch(err) {                           // reject
    console.error(err)
  } finally {                              // finally
    console.log('done!')
  }
}

wrap()
