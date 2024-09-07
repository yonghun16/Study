// 1D 카운트 하기

const readline = require('readline');

// readline 인터페이스 설정
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// 키 저장 위한 배열
let data = []

// 첫 번째 줄: 숫자의 개수 N
rl.on('line', (line) => {
  data.push(line)
})

rl.on('close', () => {
  const [n, m, s] = data[0].split(' ').map(Number);
  const heights = data[1].split(' ').map(Number);

  let count = 0;

  for (let i = 0; i < n; i++) {
    if (heights[i] === m || heights[i] === s) {
      count++;
    }
  }

  console.log(count);
})
