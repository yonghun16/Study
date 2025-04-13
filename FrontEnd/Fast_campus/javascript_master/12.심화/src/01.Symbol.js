// 심볼 (Symbol)

// 변경이 불가능한 데이터로, 유일한 식별자를 만들어 데이터를 보호하는 용도로 사용할 수 있습니다.
// Symbol은 유일하고 변경 불가능한 값을 생성할 때 사용되며, 주로 **객체의 속성 키(key)**로 사용됩니다.

// Symbol('설명')
// '설명'은 단순 디버깅을 위한 용도일 뿐, 심볼 값과는 관계가 없습니다.

const sKey = Symbol('Hello');
const user = {
  key: '일반 정보1',
  [sKey]: '민감한 정보!'     // 심볼 데이터
}

console.log(user.key)
console.log(user['key'])
console.log(user[sKey])
console.log(user[Symbol('Hello')])
console.log(sKey)
console.log(typeof sKey)


// 1. 기본 사용법
// Symbol()을 호출할 때마다 고유한 값을 생성하기 때문에 sym1과 sym2는 같지 않습니다.
const sym1 = Symbol();
const sym2 = Symbol();

console.log(sym1 === sym2); // false (항상 고유함)


// 2. 설명(description)을 붙일 수 있음
// 설명은 디버깅에 도움이 되며, Symbol의 유일성에는 영향을 주지 않습니다.
const sym = Symbol('설명용 텍스트');
console.log(sym.description); // "설명용 텍스트"


// 3. 객체의 키로 사용하기
// Symbol 키는 Object.keys()나 for...in 같은 일반적인 방법으로는 노출되지 않아서 
// **은닉 속성(hidden property)**으로 활용할 수 있습니다.
const id = Symbol('id');

const user2 = {
  name: 'Alice',
  [id]: 1234
};

console.log(user2[id]); // 1234
console.log(Object.keys(user2)); // ['name']
console.log(Object.getOwnPropertySymbols(user2)); // [Symbol(id)]


// 4. 어디에 쓰면 좋을까?
// •	객체 속성 중 다른 코드에서 접근 못 하게 숨기고 싶을 때
// •	상수 집합(enum처럼) 사용할 때
// •	라이브러리나 프레임워크에서 고유 식별자가 필요할 때


const passwordKey = Symbol('password');

const user3 = {
  name: "Alice",
  [passwordKey]: "secret123"
};

console.log(user3.name);            // "Alice"
console.log(user3.password);        // undefined
console.log(user3.passwordkey);     // undefined
console.log(Object.keys(user3));    // ["name"]
console.log(user3[passwordKey]);    // "secret123"
