// Variable

/* ------------------------------------------ 
*  var   : 재선언 O, 재할당 O, Function-scope
*  let   : 재선언 X, 재할당 O, {Block-scope}
*  const : 재선언 X, 재할당 X, {Block-scope}, 선언과 할당 동시 필요
------------------------------------------ */

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

