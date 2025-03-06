/* let(ES6), block scope */
let age = 30;
age = 31

let defaultAge;           // 에러는 아님 값은 undefined
console.log(defaultAge);


/* const (ES6), block scope */
const birthYear = 1990;

/*
birthYear = 1991;         // error 'const' assignments are read-only.
const defaultBirthYear;   // error 'const' declarations must be initialized.
*/


/* var (ES5), function scope */
var job = "programmer";
job = "teacher";
