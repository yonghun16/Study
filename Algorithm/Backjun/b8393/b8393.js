/* 합 */
/* https://www.acmicpc.net/problem/8393 */

const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(inputData[0]);
let summary = 0;

for (let i=1; i<=n; i++) {
  summary += i;
}

console.log(summary);
