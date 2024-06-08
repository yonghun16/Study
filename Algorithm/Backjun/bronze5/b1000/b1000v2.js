let fs = require('fs');
let inputData = fs.readFileSync('/dev/stdin').toString().split('\n');
let inputVal = inputData[0].split(' ').map(Number);

main(inputVal);

function main(inputVal){
  let a = inputVal[0];
  let b = inputVal[1];

  console.log(a + b);
}

