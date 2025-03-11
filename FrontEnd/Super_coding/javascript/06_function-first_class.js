// function

/*-----------------------------------------------------
 * 함수는 '1급 객체'(first-cllass object)다. (함수는 function object다.)
   - 함수를 변수에 할당 가능
   - 함수를 함수 인자로 전달 가능
   - 함수를 함수 인자로 호출 가능
   - 함수를 반환 가능
   - 함수에 프로퍼티 추가 가능
   - 추가된 프로퍼티 접근 가능
   - 함수의 프로퍼티 값 변경 가능
-----------------------------------------------------*/

// 함수를 변수에 할당 가능
const greet = function(name) {
  return `Hello, ${name}!`;
};

// 함수를 함수 인자로 전달 가능
function processGreeting(fn, name) {
  return fn(name);
}

// 함수를 함수 인자로 호출 가능
console.log(processGreeting(greet, 'Alice')); // "Hello, Alice!" 출력

// 함수를 반환 가능
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}
const double = multiplier(2);
console.log(double(5)); // 10 출력


// 함수에 프로퍼티 추가 가능
function sayHello() {
  console.log("Hello!");
}

sayHello.language = "English";
sayHello.count = 0;
sayHello.incrementCount = function () {
  this.count++;
};

sayHello(); // "Hello!" 출력

// 추가된 프로퍼티 접근 가능
console.log(sayHello.language); // "English"
console.log(sayHello.count); // 0

// 함수의 프로퍼티 값 변경 가능
sayHello.incrementCount();
console.log(sayHello.count); // 1
