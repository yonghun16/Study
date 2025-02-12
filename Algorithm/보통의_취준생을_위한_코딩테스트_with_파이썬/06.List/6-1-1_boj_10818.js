/*-----------------------------------------------------
Sub  : [BOJ] 최소, 최대
Link : https://www.acmicpc.net/problem/10818
Level: 브론즈 3
Tag  : JS,
Memo
-----------------------------------------------------*/

const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n');

// 입력
const n = Number(input[0]);
const arrList = input[1].split(' ').map(Number);

maxNum = arrList[0];
minNum = arrList[0];

for (num of arrList) {
  maxNum = num > maxNum ? num : maxNum;
  minNum = num < minNum ? num : minNum;
}

// 출력
console.log(minNum, maxNum);
