// scope
'strict mode'

/*-----------------------------------------------------
 * var ->   global scope : 전역
 * let ->   local scope  : function
 * const -> block scope  : {}
 *
 * 자바스크립트에서 '함수의 매개변수'는 해당 함수 내부에서만 접근할 수 있습니다.
 * const로 선언된 변수는 같은 스코프(scope) 내에서만 '중복 선언'이 불가능합니다. 
   하지만 다른 스코프에서는 동일한 이름의 변수를 선언할 수 있습니다
 * 스코프 체인(Scope Chain)
   - 자바스크립트의 스코프 체인(Scope Chain) 은 변수를 찾는 과정에서 
     '내부 스코프'에서 '외부 스코프'로 거슬러 올라가는 구조를 의미
     즉, 변수를 참조할 때 현재 스코프에서 찾고, 없으면 상위 스코프로 계속 올라가면서 찾는 방식
-----------------------------------------------------*/

// 1.
function calcAge(birthYear) {
  const age = 2025 - birthYear;   // age -> block, birthYear -> block
  console.log(age);

  // 3.
  function printAge() {
    const output = `${firstName}님, 당신은 ${age}살이고, ${birthYear}년에 태어났다.`;    // ouput -> local
    console.log(output);

    // 4.
    if(birthYear >= 1981 && birthYear <= 1996) {
      // 5.
      var millenial = true;       // millenial -> local : printAge()의 함수 안에서 사용 가능

      // 7.
      const firstName = 'Steven'; // firstName -> block({})
      const str = `${firstName} 당신은 millenial 입니다.`;  // str -> block({})
      console.log(str)

      // 6.
      function add(a, b) {        // add() -> local(printAge())
        return a + b;
      }
      const add2 = (a, b) => a + b; // add2() -> block({})
    }
    console.log(millenial);
    console.log(add(1, 2));
    // console.log(add2(1, 2));     // error : add2는 printAge()의 local scope에서만 사용가능
  }

  printAge();

  return age;
}


//2.
const firstName = 'Owen';         // firstName -> global
calcAge(1990);
// console.log(age)               // error : age는 calcAge()의 local scope에서만 사용가능
// printAge()                     // error : printAge()는 calcAge()의 local scope에서만 사용가능
