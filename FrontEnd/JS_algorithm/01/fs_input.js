// fs를 이용해 파일 전체를 읽어 들여 처리하기

let fs = require('fs');
let inputData = fs.readFileSync('/dev/stdin').toString().split('\n');
let inputVal = inputData[0].split(' ').map(Number);

main(inputVal);

function main(inputVal) {
  console.log(inputVal);
}
