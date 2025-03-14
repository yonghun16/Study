// Data Type - Object

/* -------------------------------------------
 * 종류 :  Object, Array, Function
 *
 * 얕은 복사 vs 깊은 복사 (shallow copy / deep copy)
  - 얕은 복사 : 객체의 최상위 속성만 복사하고, 중첩된 객체는 참조를 공유하는 방식, 원본 객체와 중첩된 객체를 공유.
  - 깊은 복사 : 객체의 모든 속성과 중첩된 객체까지 모두 복사하는 방식, 원본 객체와 복사된 객체가 서로 독립적으로 존재.
------------------------------------------- */

// 1.
console.log("\n--- 1. ");
let myAddress = 'Seoul';
let oldMyAddress = myAddress;
myAddress = 'Busan';
console.log(myAddress, oldMyAddress);

const profile = {
  address: 'Seoul'                      // data property
};
const afterProfile = profile;           // afterProfile, profile이 '같은 메모리 주소'를 참조
afterProfile.address = 'Busan';
console.log(profile);
console.log(afterProfile);


// 2. 객체 복사하기
console.log("\n--- 2. ");
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

// deep clone은 lodash 사용 권장
// - _.cloneDeep(target);
// - target: 속성을 복사할 대상 객체.
// - 터미널에서 프로젝트 라이브러리에 설치 : npm install lodash

/*

const _ = require("lodash");

const obj1 = { name: "John", details: { age: 30 } };
const obj2 = _.cloneDeep(obj1); // 깊은 복사

obj2.details.age = 40;
console.log(obj1.details.age); // 30 (원본 영향 없음)

*/
