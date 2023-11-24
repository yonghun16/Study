// 숫자사각형 4-1
// https://www.jungol.co.kr/problem/5931

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const inputData = [];
rl.on("line", function(line) {
    inputData.push(line.trim());
}).on("close", function() {
    const inputVal = inputData[0].split(" ").map(Number);
    main(inputVal);
    process.exit();
});

function main(inputVal) {
    for (let i=0; i<inputVal; i++) {
        for (let j=0; j<inputVal; j++) {
            process.stdout.write((i+1) + " ");
        }
        console.log();
    }
}