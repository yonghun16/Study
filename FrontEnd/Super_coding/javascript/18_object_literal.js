// Object Literal

/*-----------------------------------------------------
 * 객체를 표현하는 방식에 변화
   - 변수명과 객체 프로퍼티 같은 경우 중복 표현 생략
   - 객체 메서드 함수표현식 function 키워드 생략
   - 오브젝트 프로퍼티 명 안에 연산 가능
-----------------------------------------------------*/

// 1.
console.log('\n--- 1.');
const objectName = {
  a: 1,
  b: 'bb'
};

const outsideObject = {
  objectName: objectName    // ES5 까지
}
console.log(outsideObject.objectName);

const es6OutsideObject = {
  objectName,        // 중복 표현 생략 : objectName: objectName 와 같이 변수명과 객체 프로퍼티명이 같은 경우
}
console.log(es6OutsideObject.objectName);


// 2.
console.log('\n--- 2.');
const objectMethods = {
  method1: function () {
    console.log('this is method');
  }
}

objectMethods.method1();

const es6ObjectMethods = {
  method1() {         // function 키워드 생략
    console.log('this is method ES6');
  }
}

es6ObjectMethods.method1();


// 3.
console.log('\n--- 3.');
const arr = ["a", "b", "c"];
const objectWithOperation = {
    [arr[0]]: 'this is a.',
    [`${arr[1] + arr[0]}`]: "ba 입니다.",        // 오브젝트 프로퍼티 명 안에 연산 가능
    [`${arr[1]} + ${arr[0]}`]: "b + a 입니다.",
    [`${1 + 5 + "ha"}`]: "6ha 입니다.",
};

console.log(objectWithOperation);
