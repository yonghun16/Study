// function reference

/*-----------------------------------------------------
  - 함수 참조 
    - 함수를 다른 변수에 저장하거나, 함수의 인자로 전달하거나, 반환값으로 전달하는 방식. 
    - 이는 함수를 값으로 취급할 수 있다는 JavaScript의 특징을 활용한 것
-----------------------------------------------------*/

/* 1. '함수 참조'를 변수에 저장 */
console.log('\n--- 1. 함수 참조를 변수에 저장 ');
function greet() {
  console.log("Hello!");
}

const sayHello = greet;  // 함수 참조를 변수에 저장
sayHello();              // 함수 호출


/* 2. 함수를 인자로 전달 */
console.log('\n--- 2. 함수를 인자로 전달 ');
function greet() {
  console.log("Hello!");
}

function runFunction(fn) {
  fn();  // 함수 참조를 실행
}

runFunction(greet);  // 함수 참조를 전달


/* 3. 함수 반환값으로 반환 */
console.log('\n--- 3. 함수 반환값으로 반환 ');
function greet() {
  console.log("Hello!");
}

function getGreetingFunction() {
  return greet;  // 함수 참조 반환
}

const greetings = getGreetingFunction();  // 함수 참조를 반환받음
greetings();  // 함수 호출


/* 4. 함수 참조와 함수 실행 */
console.log('\n--- 4. 함수 참조와 함수 실행 ');
function greeting(callback) {
  return callback();
}

function afterGreeting() {
  console.log("Welcome");
}

// 1) alert1는 '함수 참조'를 반환받아 실행 가능
//const alert1 = greeting(() => afterGreeting);   //축약
const alert1 = greeting(() => { return afterGreeting });  // 이 함수는 afterGreeting **함수 자체(참조)**를 반환하는 함수.
                                                          // 즉, callback()을 실행하면 afterGreeting 자체를 반환
                                                          // alert1 = return afterGreeting();
alert1();                                                 // alert1() = afterGreeting();

// 2) alert2는 undefined를 반환 받고 선언과 동시에 '함수 실행'
//const alert2 = greeting(() => afterGreeting()); //축약
//const alert2 = greeting(afterGreeting);         //또 축약
const alert2 = greeting(() => { return afterGreeting()}); // greeting 내부에서 callback()이 실행되므로, 결국 afterGreeting()이 실행됨.
                                                          // (다시말해,  afterGreeting() 실행)
                                                          // alert2 = undefined
