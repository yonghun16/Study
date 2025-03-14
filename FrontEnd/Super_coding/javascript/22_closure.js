// Closure

/*-----------------------------------------------------
 * 클로저
   : 모든 함수는 그 함수가 만들어지는 '시점의 실행 컨텍스트'를 '기억'하여,
     (해당 실행 컨텍스트가 없더라도) 그 변수 환경에 '접근'할 수 있다.
   : 클로저는 함수가 만들어지는 시점의 변수들 간 연결을 끊어지지 않게 해주는 장치이다.

 * 클로저의 특징
   1. 외부 함수의 변수를 기억 
   2. 데이터 은닉
-----------------------------------------------------*/

// 0.
console.log('\n--- 0.');
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log(`Outer: ${outerVariable}, Inner: ${innerVariable}`);
    };
}

const closureExample = outerFunction("Hello");
closureExample("World");           // Outer: Hello, Inner: World     -> outerFunction 컨텍스트가 이젠 없더라도 변수를 기억함.
closureExample("Sexy Boy");        // Outer: Hello, Inner: Sexy Boy
closureExample("Nice Girl");       // Outer: Hello, Inner: Nice Girl


// 1.
console.log('\n--- 1.');
const passengerBooking = function() {
  let passengerCount = 0;

  return function() {
    passengerCount++;
    console.log('passengerCount', passengerCount);
  }
}

const booker = passengerBooking();   // booker()가 생성된 시점에서 passengerBooking()의 passengerCount를 기억함.
booker();    // passengerCount 1    passengerBooking() 컨텍스트가 없더라도 passengerCount를 기억하여 리턴 시 passengerCount에 +1 하여 출력함.
booker();    // passengerCount 2    passengerCount를 기억하여 리턴 시 passengerCount에 또 +1 하여 출력함.
booker();    // passengerCount 3


// 2.
console.log('\n--- 2.');
let count = 0;

const increment = function () {   // increment()가 생성된 시점에서 외부 변수인 count를 기억함.
  count++;
  console.log(count);
};

increment();        // 1   첫 번째 호출 때 count가 0임을 기억하고 +1 하여 1 출력 
increment();        // 2   두 번째 호출 때 count가 1임을 기억하고 +1 하여 2 출력
increment();        // 3   세 번째 호출 때 count가 2임을 기억하고 +1 하여 3 출력
