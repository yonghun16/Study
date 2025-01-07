// 콜백

const sum = (a, b, c, cal) => {
  if (cal) {
    cal(a, b, c)
  }
  else {
    console.log(a + b)
  }
}

const sum_print = (a, b, c) => {
  console.log(a + b + c)
}

sum(1, 2, 3)
