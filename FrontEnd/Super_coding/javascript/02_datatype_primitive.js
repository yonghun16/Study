// Data Type - Primitive

/* -------------------------------------------
  * Number
  * String
  * Boolean
  * Undefined
  * Null
  * Symbol
  * BigInt
------------------------------------------- */

// 1.Number
console.log(10);
let num = 12;
console.log(typeof num);


// 2.String
console.log("hello");
let str = "hello";
console.log(typeof str);
let nameA = "john";
console.log(str + " " + nameA);
let templeteLiteral = `hello hi ${nameA}`;
console.log(templeteLiteral);


// 3.Boolean
let isTrue = true;
console.log(isTrue);
console.log(typeof isTrue);


// 4.Undefined
let undef;
console.log(undef);
console.log(typeof undef);


// 5.Null
let nul = null;
console.log(nul);
console.log(typeof nul);


// 6.Symbol
let symbol = Symbol();
console.log(symbol);
console.log(typeof symbol);


// 7.BigInt
let bigInt = 100n;
let bigInt2 = 100234332329322213424223423423423424343n;
let nomarlInt = 129812318923128931291; // Numeric literals with absolute values equal to 2^53 or greater are too large to be represented accurately as integers.
                                       // Number.MAX_SAFE_INTEGER = 9,007,199,254,740,991
console.log(bigInt);
console.log(bigInt2);
console.log(nomarlInt);  // 129812318923128930000
console.log(typeof bigInt);
