// 얕은복사 & 깊은 복사

// 얕은복사(Shallow Copy) - 참조형의 '1차원' 데이터만 복사
// 깊은복사(Deep Copy) - 참조형의 '모든 차원' 데이터를 복사


// === 얕은복사 ===
console.log('==== 1. Object.assign()을 이용한 얕은복사 ====')
const a = { x: 1}
const b = Object.assign({}, a);  // a와 동일한 데이터를 복사 -> 얕은복사

b.x = 2;

// b를 수정해도 a에는 영향을 미치지 않게 된다.
console.log(b)  // { x: 2 }
console.log(a)  // { x: 1 }


console.log('\n==== 2. 전개연산자를 이용한 얕은복사 ====')
const c = { x: 1}
const d = { ...c };  // c와 동일한 데이터를 복사 -> 얕은복사

d.x = 2;

// d를 수정해도 c에는 영향을 미치지 않게 된다.
console.log(d)  // { x: 2 }
console.log(c)  // { x: 1 }



// === 깊은복사 ===
console.log('\n==== 3. 전개연산자를 이용한 깊은복사 실패 ====')
const e = { x: { y: 1 } }
const f = { ...e };    // e와 동일한 데이터를 복사 -> 얕은복사
                       // x: {}  이 부분은 복사가 되었지만, y: 1 이부분은 복사가 되지 않음
f.x.y = 2;

// f만 수정쌔음에 불구하고 e까지 영향을 미치게 된다. 
console.log(f)  // { x: { y: 2 } }
console.log(e)  // { x: { y: 2 } }


console.log('\n==== 4. JSON.parse(JSON.stringify())를 이용한 깊은복사 ====')
const g = { x: { y: 1 } }
const h = JSON.parse(JSON.stringify(g));    // g와 동일한 데이터를 복사 -> 깊은복사

h.x.y = 2;

// h를 수정해도 g에는 영향을 미치지 않게 된다.
console.log(h)  // { x: { y: 2 } }
console.log(g)  // { x: { y: 1 } }


console.log('\n==== 5. lodash를 이용한 깊은복사 ====')

import cloneDeep from 'lodash/cloneDeep.js'

const i = { x: { y: 1 } }
const j = cloneDeep(i);    // i와 동일한 데이터를 복사 -> 깊은복사

j.x.y = 2;

// j를 수정해도 i에는 영향을 미치지 않게 된다.
console.log(j)  // { x: { y: 2 } }
console.log(i)  // { x: { y: 1 } }

const k = [[1, 2], [3]]
const l = cloneDeep(k);

l[0][0] = 2;

// l를 수정해도 k에는 영향을 미치지 않게 된다.
console.log(l)  // [ [ 2, 2 ], [ 3 ] ]
console.log(k)  // [ [ 1, 2 ], [ 3 ] ]
