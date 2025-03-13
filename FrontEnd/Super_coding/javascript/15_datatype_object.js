// Data Type - Object
/* -------------------------------------------
 * Object, Array, Function
 *
------------------------------------------- */

// 1.
console.log("1. ");
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
console.log("2. ");
const profile2 = {
  address: 'Seoul',
  family: ['Tony', 'Chris']
};

const profile2Copy = Object.assign({}, profile2);   // 얕은 복사. 프로퍼티가 원시 타입이면 복사 O, 객체 타입이면 X
profile2Copy.address = 'Daegu';

profile2Copy.family.push('Levin');       // profile2Copy.family배열에 넣지만, profile2.family배열도 값이 더해짐.
profile2Copy.family.push('Roy');

console.log(profile2);
console.log(profile2Copy);

// deep clone은 lodash 사용 권장
const _ = require("lodash");

const obj1 = { name: "John", details: { age: 30 } };
const obj2 = _.cloneDeep(obj1); // 깊은 복사

obj2.details.age = 40;
console.log(obj1.details.age); // 30 (원본 영향 없음)
