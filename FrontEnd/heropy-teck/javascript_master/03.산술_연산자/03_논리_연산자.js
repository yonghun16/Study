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
console.log('A' && 'B' && 'C')  // C 거짓을 만나지 못하면 마지막에 있는 값을 반환함
console.log()

// Logical OR (||)
console.log(true || true);           // true
console.log(true || false);          // true
console.log(0 || 1);                 // 1
console.log(false || 0 || {});       // {}    -> true
console.log(false || [] || null);    // []    -> 참을 만날 때까지 다음 항을 확인
console.log(false || 0 || null);     // null  -> 참을 만날 때까지 다음 항을 확인
console.log(false || null || 1);     // 1     -> 참을 만날 때까지 다음 항을 확인
console.log()

// Logical NOT (!)
console.log(!true);  // false
console.log(!false); // true
