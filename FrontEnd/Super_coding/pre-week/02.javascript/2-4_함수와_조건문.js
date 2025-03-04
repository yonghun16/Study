// 함수
function thisItem(item, price) {
  console.log("이 상품은 '"+ item + "' 입니다.");
  console.log("가격은 "+ price + "원입니다.");
}

thisItem("맥북", 100);
thisItem("아이패드", 300);
thisItem("애플워치", 300);
thisItem("애플펜슬", 530);


// 객체+함수
const calculator = {
  plus: function(a, b) {
    return a + b;
  },
  minus: function(a, b) {
    return a - b;
  },
  multiply: function(a, b) {
    return a * b;
  },
  divide: function(a, b) {
    return a / b;
  }
}

console.log(calculator.plus(1, 2));
console.log(calculator.minus(1, 2));
console.log(calculator.multiply(1, 2));
console.log(calculator.divide(1, 2));


// 조건문
if (1 === 1) {
  console.log("1이 1인 경우.");
}

if (true) {
  console.log("true인 경우.");
}

if (!true) {
  console.log("!true인 경우.");
} else {
  console.log("else문에서 실행");
}

// & ||  !
if (1 === 1 && 2 === 2) {
  console.log("1이 1인 경우.");
}

if (1 === 1 || 2 === 2) {
  console.log("1이 1인 경우.");
}
