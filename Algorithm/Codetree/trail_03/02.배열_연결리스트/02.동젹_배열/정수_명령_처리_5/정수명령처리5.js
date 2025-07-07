/*-----------------------------------------------------
Sub  : 정수명령처리
Link : https://www.codetree.ai/ko/trails/complete/curated-cards/test-process-numeric-commands-5/description
Tag  : JS, 배열
Memo
-----------------------------------------------------*/

const TEST_MODE = true;

let input;

if (TEST_MODE) {
  const filePath = require('path').join(__dirname, 'input.txt');
  input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');
}
else {
  input = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
}

const n = Number(input[0]);
const commands = input.slice(1, n + 1);

let answer = [];

commands.forEach((command) => {
    let [cmd, value] = command.split(" ");

    if (cmd === "push_back") {
        answer.push(value);
    }
    else if (cmd === "get") {
        console.log(answer[Number(value) - 1]);
    }
    else if (cmd === "size") {
        console.log(answer.length);
    }
    else if (cmd === "pop_back") {
        answer.pop();
    }
});
