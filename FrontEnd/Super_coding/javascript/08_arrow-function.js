// arrow-function

/*-----------------------------------------------------
 * const add = (a, b) => a + b;
   1. 간결한 문법
   2. this가 상위 스코프를 따른다 (lexical this)
   3. arguments 객체 없음
   4. 생성자 함수로 사용하면 오류 발생
   5. 메서드로 사용하면 주의해야 함
-----------------------------------------------------*/

// 1. 간결한 문법
//  • 중괄호 {} 없이 표현식(단일 반환문)만 있는 경우 return을 생략할 수 있음.
//  • 매개변수가 하나면 ()도 생략 가능:
// 일반 함수 표현식
const add = function(a, b) {
  return a + b;
};

// 화살표 함수
// const addArrow = (a, b) => { return a + b };
const addArrow = (a, b) => a + b;


// 2. this가 상위 스코프를 따른다 (lexical this)
//  • Arrow function은 자신만의 this를 가지지 않고, 상위 스코프의 this를 그대로 사용함.
// 일반 함수
function Person() {
  this.age = 0;

  setInterval(function() {
    this.age++;        // 여기서 this는 window 또는 undefined (strict mode)
    console.log(this.age);
  }, 1000);
}
const p1 = new Person();

// 화살표 함수
function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++;         // 화살표 함수는 상위 스코프(Person)의 this를 사용
    console.log(this.age);
  }, 1000);
}
const p2 = new Person();


// 3. arguments 객체 없음
//  • 화살표 함수에는 arguments 객체가 없음.
//  • 대신, 필요하면 rest parameter (...)를 사용해야 함.
function normalFunction() {
  console.log(arguments); // 정상 동작
}
normalFunction(1, 2, 3);

const arrowFunction = (...args) => {
  console.log(args); // [1, 2, 3]
};
arrowFunction(1, 2, 3);

/*
const arrowFunction = () => {
  console.log(arguments); // Error: arguments is not defined
};
arrowFunction(1, 2, 3);
*/


// 4. 생성자 함수로 사용 불가
//  • 즉, new 키워드를 사용할 경우 오류 발생.
const Person2 = (name) => {
  this.name = name;
};
const p = new Person2('John'); // TypeError: Person is not a constructor


// 5. 메서드로 사용하면 주의해야 함
//  • 객체의 메서드로 사용 시, 화살표 함수는 this를 객체가 아닌 
//    상위 스코프에서 가져오기 때문에 의도한 대로 동작하지 않을 수 있음.
// 일반 함수 사용 시
const obj = {
  name: "Alice",
  sayName() {
    console.log(this.name); // "Alice"
  }
};
obj.sayName();

// 화살표 함수 사용 시
const objArrow = {
  name: "Alice",
  sayName: () => {
    console.log(this.name); // undefined (this는 obj가 아닌 상위 스코프를 가리킴)
  }
};
obj.sayName();

