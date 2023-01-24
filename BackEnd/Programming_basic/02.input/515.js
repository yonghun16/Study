const readline = require('readline'); 
const r1 = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout 
}); 

let input_data = []; 
let a, b;

r1.on("line", function(line) { 
    input_data.push(line); 
    r1.close(); 
}).on("close", function() { 
    a = (input_data[0].split(' '))[0];
    b = (input_data[0].split(' '))[1];

    console.log(a + " * " + b + " = " + a*b);
    console.log(a + " / " + b + " = " + a/b);

    process.exit(); 
}); 

