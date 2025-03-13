// hoisting
'strict mode'

/*-----------------------------------------------------
 * 호이스팅
   - 자바스크립트 스코프 안에서 변수를 최상단에서 선언
   - let, const, var 변수는 모두 선언시 호이스팅 적용
     - var : 1번 라인에서 끌어 올려져서 변수가 선언되며 '초기화가 동시'에 일어난다. 
     - let, const : 1번 라인에서 끌어 올려져서 변수가 선언되며 
       '초기화는 코드를 작성한 라인 시점'에 일어난다.

 * 변수의 선언 vs 초기화 vs 할당
   - 변수 선언   : 변수를 만든다(메모리의 공간 확보)
   - 변수 초기화 : 변수를 사용할 준비를 한다 (메모리에 값 설정)
                  - var의 경우 선언 단계에서 undefined로 초기화 (undefined도 값임)
                  - let, const는 선언 단계에서 초기화되지 않고, 코드가 실행될 때 초기화
   - 변수 할당   : 변수에 값을 넣는 과정.


 * Temporal Dead Zone(TDZ) // 일시적 사각 지대
   - 스코프의 '시작 지점'부터 '초기화 지점'까지를 일컬음
   - var는 스코프의 시작지점과 초기화 지점이 같기에 TDZ가 존재하지 않음.
   - let과 const는 TDZ가 존재함. 
-----------------------------------------------------*/
console.log(foo);
var foo;

//console.log(bar);      // ReferenceError: Cannot access 'bar' before initialization 
let bar;                 // '초기화'되지 않은 bar 변수는 접근이 불가합니다.
/*-----------------------------------------------------*/


// 2.
console.log(me)
// console.log(job)    // TDZ error
// console.log(year)   // TDZ error


// 1.
var me = 'Song';
let job = 'engineer';
const year = 1993;


// 4.
console.log(addDecl(2, 3));
// console.log(addExp(2, 3));      // TDZ error
// console.log(addArrow(2, 3));    // TDZ error


// 3.
function addDecl(a, b) { return a + b; }
const addExp = function(a, b) { return a + b; }
const addArrow = (a, b) => a + b;


// 5.
if(!numProducts) deleteShoppingCart();   // undefined(Falsy)의 부정 연산은 true

var numProducts = 10;

function deleteShoppingCart() {
  console.log('모든 상품 삭제');     // 왜 실행?? numProducts 가 undefined, var를 쓰지 말아라
}
