// Data Type - Object

/* -------------------------------------------
 * 종류 :  Object, Array, Function
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

