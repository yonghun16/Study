// optional chaining

/*-----------------------------------------------------
 * Optional Chaining(?.) : 객체의 중첩된 속성을 안전하게 접근할 수 있도록 도와주는 연산자
   1. 객체의 속성이 존재하지 않아도 오류 없이 undefined 반환
   2. 중첩된 객체에 안전하게 접근 가능
   3. 메서드 호출 및 배열 요소 접근에도 사용 가능
-----------------------------------------------------*/

const weekdays = {
  mon: {
    open: 10,
    close: 22
  },
  tue: {
    open: 11,
    close: 20
  }
}

console.log(weekdays.mon)
console.log(weekdays.mon.open)
console.log(weekdays.wed)             // undefined가 출력됨.
//console.log(weekdays.wed.open)      // error : JS는 undefined의 속성에 접근하려하면 에러를 발생시킴.


// 1. 
console.log("\n--- 1.");
if(weekdays.wed) {
  console.log("ES5 ", weekdays.wed.open);     // 고전 방법 (ES5)
}
console.log("ES6 ", weekdays.wed?.open)       // 객체의 속성이 존재하지 않다면 오류 없이 undefined 반환.


// 2.
console.log("\n--- 2.");
const thisIsNull = null;
// console.log(thisIsNull.a);                 // error : JS는 null의 속성에 접근하려하면 에러를 발생시킴.
console.log('ES6 ', thisIsNull?.a);           // null의 속성이 존재하지 않다면 오류 없이 undefined 반환


// 3.
console.log("\n--- 3.");
const objectMethods = {
  method1: function() {
    console.log("this is method1");
  },
};
objectMethods.method1();
//objectMethods.method2();                              // error : 객체에 없는 메서드를 접근하려 하여 에러
objectMethods.method2?.() ?? console.log('ES6 : no method');  // 메서드가 없다면 오류 없이 undefined 리턴

