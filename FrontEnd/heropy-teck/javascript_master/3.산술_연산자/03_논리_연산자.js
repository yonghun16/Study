/* 논리(logifcal operator) */
// Logical AND (&&)
console.log(true && true);   // true
console.log(true && false);  // false
console.log()

console.log(1 && 1)             // 1
console.log(1 && 0)             // 0
console.log(1 && 2 && 3)        // 3 
console.log(3 && 2 && 1)        // 1 -> 0(거짓)이 나오지 않으니 1까지 확인한 뒤 1 출력
console.log(0 && 2 && 1)        // 0 -> 0부터 거짓이니 0을 출력
console.log('A' && 'B' && '')   // ''
console.log('A' && 'B' && 'C')  // C
console.log()

// Logical OR (||)
console.log(true || true);   // true
console.log(true || false);  // true

// Logical NOT (!)
console.log(!true);  // false
console.log(!false); // true
