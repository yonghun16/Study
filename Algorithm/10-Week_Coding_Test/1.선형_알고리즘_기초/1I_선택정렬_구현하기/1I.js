const fs = require('fs');

// 입력 읽기
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const data = input[1].split(' ').map(Number);

function getMinIndex(data, begin, end) {
    let index = begin;
    for (let i = begin + 1; i < end; i++) {
        if (data[i] < data[index]) {
            index = i;
        }
    }
    return index;
}

function selectionSort(data) {
    for (let i = 0; i < data.length - 1; i++) {
        const minIndex = getMinIndex(data, i, data.length);
        [data[i], data[minIndex]] = [data[minIndex], data[i]]; // Swap
    }
}

selectionSort(data);

console.log(data.join(' '));
