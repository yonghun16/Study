/* 부정(Negation Operator) */
console.log()
console.log("부정(Negation Operator)")

console.log(!true)    // true
console.log(!false)   // false
console.log(!0)       // true 
console.log(!!0)      // false
console.log(!!!0)     // true
console.log()

console.log(!null)      // true
console.log(!undefined) // true
console.log(!NaN)       // true
console.log(!'')        // true
console.log()

console.log(!{})        // false  
console.log(![])        // false
console.log()


/* 비교(Equality Operator) */
console.log()
console.log("비교(Equality Operator)")

const a = 1
const b = 3

console.log(a == b)     // false
console.log(a != b)     // true
console.log(a === b)    // false
console.log(a !== b)    // true
