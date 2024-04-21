// Resolve, Reject 그리고 에러 핸들링1

// 콜백 함수를 통한 '에러 핸들링'
const delayAdd = (index, cb, errorCb) => {
  setTimeout(() => {
    if (index > 10) {
      errorCb(`${index}는 10보다 클 수 없습니다.`)
      return
    }
    console.log(index)
    cb(index + 1)
  }, 1000)
}

delayAdd (
  4,
  res => console.log(res),
  err => console.error(err)
)
