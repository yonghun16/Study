// 불변성 & 가변성

// 불변성(Immutability)은 생성된 데이터가 메모리에서 변경되지 않고,
// 가변성(Mutability)은 생성된 데이터가 메모리에서 변경될 수 있음을 의미

// 자바스크립트 원시형은 불변성을, 참조형은 가변성을 가지고 있음.


// 원시형
let a = 1;
let b = a;

b = 2;

console.log('b', b);  // 2
console.log('a', a);  // 1


// 참조형(객체)
let c = { x: 1 };
let d = c;

d.x = 2;    // d.x는 c.x와 동일한 데이터를 참조

console.log('d', d);  // { x: 2 }
console.log('c', c);  // { x: 2 }


// 참조형(배열)
let e = [1, 2, 3];
let f = e;

f[0] = 4;   // f[0]는 e[0]와 동일한 데이터를 참조

console.log('f', f);  // [4, 2, 3]
console.log('e', e);  // [4, 2, 3]
