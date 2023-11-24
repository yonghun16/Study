// 한 줄식 입력을 받아서, 처리하여 정답을 출력할 때는 readline 모듈을 사용할 수 있다.

const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputData = [];
rl.on("line", function (line) {
  // 콘솔 입력 창에서 줄바꿈(Enter)를 입려할 때마다 호출
  inputData.push(line.trim());
}).on("close", function () {
  // 콘솔 입력 창에서 Ctrl+C 혹은 Ctrl+D를 입력하면 호출(입력의 종료)
  const inputVal = inputData[0].split(" ").map(Number);
  main(inputVal);
  process.exit();
});

function main(inputVal) {
  console.log(inputVal);
}