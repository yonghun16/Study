const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().split('\n');


n = Number(inputData[0])

function isPrimeNumber(caseNumber) {
  if (caseNumber <= 1) return 'NO';
  if (caseNumber === 2) return 'YES';
  if (caseNumber % 2 === 0) return 'NO';

  // 3부터 √case까지 홀수만 검사
  for (let i=3; i<(caseNumber ** 0.5)+1; i+=2) {
    if (caseNumber % i === 0) {
      return 'NO'
    }
  }
  return 'YES'
}

for (let i=0; i<n; i++) {
  caseNumber = Number(inputData[i+1]);
  console.log(`Case #${i+1}`);
  console.log(isPrimeNumber(caseNumber));
}
