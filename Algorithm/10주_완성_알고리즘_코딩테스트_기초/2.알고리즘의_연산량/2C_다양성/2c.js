// 2C 다양성

const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(inputData[0]);
const array = inputData[1].split(' ').map(Number);

let result = 1;
let current = array[0];

for (let i=1; i<array.length; i++) {
  if (current !== array[i]){
    result += 1;
    current = array[i];
  }
}

console.log(result);
