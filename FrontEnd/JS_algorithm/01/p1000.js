let fs = require('fs');
let inputData = fs.readFileSync('/dev/stdin').toString().split('\n');
let inputVal = inputData[0].split(' ');

main(inputVal);

function main(inputVal){
  let a = parseInt(inputVal[0]);
  let b = parseInt(inputVal[1]);

  console.log(a + b);
}

