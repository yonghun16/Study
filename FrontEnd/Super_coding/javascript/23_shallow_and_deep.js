// Shallow vs Deep

/* -------------------------------------------
 * 얕은 복사 vs 깊은 복사 (shallow copy / deep copy)
  - 얕은 복사 : 객체의 최상위 속성만 복사하고, 중첩된 객체는 참조를 공유하는 방식, 원본 객체와 중첩된 객체를 공유.
  - 깊은 복사 : 객체의 모든 속성과 중첩된 객체까지 모두 복사하는 방식, 원본 객체와 복사된 객체가 서로 독립적으로 존재.

 * 얕은 비교 vs 깊은 비교
  - 얕은 비교 : 숫자, 문자열 등 원시 자료형은 '값'을 비교함.
  - 깊은 비교 : 배열, 객체 등 참조 자료형은 '참조되는 위치'를 비교합니다.

 * 언제 얕은 비교를 사용할까?
  - React.memo()에서 props를 비교하는 때
  - 리액트 컴포넌트가 '리 렌더링'을 하기전
    - state 변경이 있을 때
    - 부모 컴포넌트가 렌더링 될 때

    * (참조) 리엑트가 리렌더링 되는 경우
      - state 변경이 있을 때
      - 부모 컴포넌트가 렌더링 될 때
      - 새로운 props이 들어올 때
      - shouldComponentUpdate에서 true를 반환될 때
      - forceUpdate가 실행될 때

 * 언제 깊은 비교를 사용할까?
  - 객체나 배열의 내부 값이 같은지 확인할 때 (예: Redux 상태 비교)
  - JSON 데이터를 비교할 때
  - 두 개의 깊은 중첩 구조의 객체를 비교해야 할 때
------------------------------------------- */

// 1. 얕은 복사
console.log("\n--- 1. 얕은 복사");
const profile2 = {
  address: 'Seoul',
  family: ['Tony', 'Chris']
};

const profile2Copy = Object.assign({}, profile2);   // 얕은 복사. 프로퍼티가 원시 타입이면 복사 O, 객체 타입이면 X
profile2Copy.address = 'Daegu';
profile2Copy.family.push('Levin');                  // profile2Copy.family 배열에 값을 넣지만, 같은 객체를 참조한다,
                                                    // 때문에 profile2.family배열도 더해진 값이 조회가 됨.
profile2Copy.family.push('Roy');

console.log(profile2);
console.log(profile2Copy);


// 2. 깊은 복사
console.log("\n--- 2. 깊은 복사");
/*
const _ = require("lodash");

const obj1 = { name: "John", details: { age: 30 } };
const obj2 = _.cloneDeep(obj1);                          // 깊은 복사

obj2.details.age = 40;
console.log(obj1.details.age);                          // 30 (원본 영향 없음)
*/


// 3. 얕은 비교
console.log("\n--- 3. 얕은 비교");
console.log("\n------ 1) 기본 자료형 비교 ");
console.log(1 === 1);             // true
console.log("hello" === "hello"); // true

console.log("\n------ 2) 객체 비교 ");
const obj1 = { a: 1 };
const obj2 = { a: 1 };
console.log(obj1 === obj2); // false, 객체는 메모리 주소를 비교하기 때문에, 내용이 같아도 false

console.log("\n------ 3) 같은 객체를 참조 ");
const obj3 = { a: 1 };
const obj4 = obj3;          // obj1과 같은 메모리 주소를 가짐
console.log(obj3 === obj4); // true, obj2가 obj1을 가리키고 있어서 같은 객체로 인식


// 4. 깊은 비교
console.log("\n--- 4. 깊은 비교");
console.log("\n------ 1) JSON.stringify() ");
const obj5 = { a: 1, b: 2 };
const obj6 = { a: 1, b: 2 };
console.log(JSON.stringify(obj5) === JSON.stringify(obj6)); // true, 객체 속성의 순서가 다르면 오작동 가능

console.log("\n------ 2) lodash.isEqual() ");
/*
const _ = require("lodash");   

const obj7 = { a: 1, b: 2 };
const obj8 = { a: 1, b: 2 };

console.log(_.isEqual(obj7, obj8)); // true
*/
