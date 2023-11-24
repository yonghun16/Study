const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().split('\n');
const inputVal = inputData[0].split(' ').map(Number);

main(inputVal);

function main(inputVal) {
    for (let i=0; i<inputVal; i++) {
        for (let j=0; j<inputVal; j++) {
            if((i+1)%2 !== 0) {
                    process.stdout.write((j+1) + " ");
                }
                else {
                    process.stdout.write((inputVal-j) + " ");
                }
            }

        }
        console.log();
    }
}
