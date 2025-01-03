// 오름차순인가?

const fs = require("fs")
const data = fs.readFileSync("/dev/stdin").toString().split("\n")

const n = data[0]
const arr = data[1].split(" ").map(Number)

result = 'YES'

for (let i = 0; i < n-1; i++) {
  if (arr[i] > arr[i+1]) {
    result = 'NO'
    break
  }
}

console.log(result)
