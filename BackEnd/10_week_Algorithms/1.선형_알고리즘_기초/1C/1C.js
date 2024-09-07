// 배열의 최대값

const readline = require('readline');

// readline 인터페이스 설정
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 숫자들 저장을 위한 배열
let numbers = [];

// 첫 번째 줄: 숫자의 개수 N
rl.on('line', (line) => {
    if (numbers.length === 0) {
        // 숫자의 개수 N을 읽고, 그 줄은 무시
        const N = parseInt(line);
    } else {
        // 두 번째 줄: 숫자들
        numbers = line.split(' ').map(Number);
        // 가장 큰 숫자를 찾기
        const maxNumber = Math.max(...numbers);
        // 결과 출력
        console.log(maxNumber);
        // 인터페이스 종료
        rl.close();
    }
});
