const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

function insertionSort() {
  for (let i = 1; i < n; i++) {
    let j = i - 1;
    const key = arr[i];
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j -= 1;
    }
    arr[j + 1] = key;  // 삽입 위치 : key보다 작은 값을 처음 만난 지점 다음
  }
}

insertionSort();

console.log(arr.join(' '));
