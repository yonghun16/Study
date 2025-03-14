// function

/*-----------------------------------------------------
 * 함수 선언문(변수에 저장 X)
   - function statement() {}

 * 함수 표현식(변수에 저장 O)
   - expression = function() {}     // '익명 함수' function() {}을 '변수' expression에 할당

 * '함수 표현식'이 필요한 이유
   - 클로저(외부 변수를 기억하는 내부 함수) : 실행 후에도 상태 유지 가능
   - 동적 함수(조건에 따라 다른 함수 반환)  : 코드 실행 중 동적으로 함수 생성

 * '함수 표현식'을 쓰는 이유
   - 1. 호이스팅 방지           : 정의 전에 호출 불가 -> 코드 예측 가능성 증가 (함수 선언문은 자동으로 끌어올려짐)
   - 2. 콜백에 익명함수 할당    : 굳이 함수 이름 만들 필요 없이 콜백으로 바로 전달 가능 (함수 선언문은 이름이 필수)
   - 3. 클로저에 익명함수 할당  : 굳이 함수 이름 만들 필요 없이 클로저로 간단히 구현 (클로저 자체에 디버깅이나 재귀를 쓰기 위해선 함수 이름이 필요하기 때문에 함수 선언문 필요)
   - 4. 함수를 동적으로 정의    : 실행 중에 함수 내용을 바꿀 수 있음. (함수 선언문은 고정된 함수만 가능)
   - 5. 일회성 함수 사용에 적합 : 이벤트 핸들러, setTimeout 등에 적합 (함수 선언문은 항상 메모리에 존재)

-----------------------------------------------------*/

// 1. 호이스팅 방지

// 함수 선언 전 호출
//console.log(functionExpression('John'));        // 함수 표현식은 '호이스팅'이 되지 않아 에러 발생
console.log(functionStatement('marray'));

// 함수 표현식
const functionExpression = function(name) {
  return `Hello, ${name}!`;
};

// 함수 선언문
function functionStatement(name) {
  return `Hello, ${name}!`;
};


console.log()
// 2. 콜백에 익명함수 할당
/*
  - greet을 변수에 할당해서 필요할 때 전달 가능.
	- 익명 함수도 사용 가능 (processUserInput(function(name) { ... })).
*/
function processUserInput(name, callback1, callback2, callback3) {
  callback1(name);   // 전달된 함수 실행
  callback2(name);
  callback3(name);
}

const greet = function(name) { // 함수 표현식 사용  (직관적)
  console.log(`Hello, ${name}!`);
};

function bye(name) {           // 함수 선언문도 사용은 가능 (덜 직관적)
  console.log(`Good Bye, ${name}~`);
};

processUserInput("Bark", greet, bye, function(name){  // '함수 표현식' 구조를 통해 익명 함수 할당 가능 callback3 = function(name) {...}
  console.log(`Have Dinner, ${name}`)                 // 따로 함수를 선언하지 않아 간편함.
});


// 3. 클로저에 익명함수 할당
/*
  - 클로저(Closure) : 함수가 실행된 후에도 외부 함수의 변수를 기억하고 접근할 수 있는 함수
  - return function() {...}는 익명 함수 표현식으로 외부 count 변수를 기억함.
  - counter가 생성된 후에도 count 값을 유지하는 클로저 역할을 함.
*/
function makeCounter() {
  let count = 0;
                          //  굳이 '이름 있는 함수' 사용 없이
  return function() {     // '함수 표현식' 구조를 통해 익명 함수 사용으로 '클로저 구현' 간편화
    count++;
    console.log(count);
  };
}

const counter = makeCounter();
counter(); // 1
counter(); // 2
counter(); // 3


// 4. 함수를 동적으로 정의
/*
  - 조건에 따라 '다른 함수'를 반환해야 하기 때문.
  - 동적 함수 생성이 가능해서 유연한 코드 작성이 가능!
*/
function getWariorSkill(level) {
  if (level === 12) {
    return function(weaponDamage, skillDamage) { return `MegaSlushDmage: ${weaponDamage * skillDamage}`; };            // 함수 표현식
  } 
  if (level === 20) {
    return function(weaponDamage, skillDamage) { return `GigaSulshDmage: ${weaponDamage * (skillDamage * 2)}`; };            // 함수 표현식
  }
  return function() { return "스킬 습득 레벨이 아닙니다."; }; // 기본 반환
}

const megaSlush = getWariorSkill(12);
console.log(megaSlush(3, 5));      // 15

const gigaSlush = getWariorSkill(20);
console.log(gigaSlush(3, 5));     // 30


// 5. 일회성 함수 사용에 적합
/*
  - 한 번쓰고 말 함수에 굳이 이름을 붙일 필요는 없음.
  - 이벤트핸들러 등에 유용함
*/
document.getElementById("btn").addEventListener("click", function() {
  console.log("Button clicked!");
});
