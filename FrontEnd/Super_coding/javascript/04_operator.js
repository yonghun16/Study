// Operator

/*-----------------------------------------------------
 * 할당 연산자 (Assignment Operators)
 * 타입 변환   (Type Casting)
 * 타입 강제   (Type Coercion)
 * 비교 연산자 (Comprasion Operator)
 * 산술 연산자 (Arithmetic Operators)
 * 논리 연산자 (Logical Operators)
 * 삼항 연산자 (Conditional Operators)

 * Truthy vs Falsy
   - Truthy : true,  {},  [],  1, -1, "0", "false"
   - Falsy  : false, null, 0, "", undefined, NaN
-----------------------------------------------------*/

// 할당 연산자 (Assignment Operators)
console.log('\n--- 1.');
const myAppleCount = 5;
const yourAppleCount = 10;
const totalApplceCount = myAppleCount + yourAppleCount;  // 15 = 5 + 10

let appleCount = 4;

appleCount += 10;
console.log(appleCount);  // 14

appleCount -= 5;
console.log(appleCount);  // 5

appleCount *= 2;
console.log(appleCount);  // 18

appleCount /= 3;
console.log(appleCount);  // 6


// 타입 변환과 타입 강제
// casting
console.log('\n--- 2.');
const birthYear = "1990";
console.log(typeof birthYear);               // string
console.log(Number(birthYear) + 10);
console.log(Number("Hello"));                // NaN
console.log(String(30), 30);                 // string, number

// coerction
console.log('\n--- 3.');
console.log("나는" + 30 + "살입니다.");      // string
console.log("20" - 5.5)                      // number


// 비교 연산자 (Comprasion Operator)
console.log('\n--- 4.');
const stringTree = '3';
const numberTree = 3;
console.log(stringTree == numberTree);       // true
console.log(stringTree === numberTree);      // false

const myName = "John";
const yourName = "Paul";
console.log(myName == yourName);             // false
console.log(myName === yourName);            // false

const stringIsTrue = "true";
const booleanIsTrue = true;                  // cating시 boolean의 Type은 number로 변환이 된다.
const numberIsTrue = 1;                      // boolean으로 Casting 시 value는 true가 된다. (Truthy)
console.log(stringIsTrue === booleanIsTrue); // false
console.log(booleanIsTrue == stringIsTrue);  // false
console.log(numberIsTrue == booleanIsTrue);  // * true

console.log(Boolean(0))                      // * false
console.log(Number(true))                    // 1
console.log(Number(false))                   // 0


// 산술 연산자 (Arithmetic Operators)
console.log('\n--- 5.');
let num = 3;
num++;
console.log(num);   // 4

num--;
console.log(num);   // 3


// 논리 연산자 (Logical Operators)
console.log('\n--- 6.');
const a1 = true && true;    // t && t는 true 반환
const a2 = true && false;   // t && f는 false 반환
const a3 = false && true;   // f && t는 false 반환
const a4 = false && 3 == 4; // f && f는 false 반환
const a5 = "Cat" && "Dog";  // * t && t는 Dog 반환 
const a6 = false && "Cat";  // f && t는 false 반환
const a7 = "Cat" && false;  // t && f는 false 반환

const o1 = true || true;    // t || t는 true 반환
const o2 = false || true;   // f || t는 true 반환
const o3 = true || false;   // t || f는 true 반환
const o4 = false || 3 == 4; // f || f는 false 반환
const o5 = "Cat" || "Dog";  // t || t는 Cat 반환
const o6 = false || "Cat";  // * f || t는 Cat 반환
const o7 = "Cat" || false;  // t || f는 Cat 반환


// 삼항 연산자 (Conditional Operators)
console.log('\n--- 7.');
const age = 17;
const AdultCheck = age > 18 ? "성년" : "미성년";
