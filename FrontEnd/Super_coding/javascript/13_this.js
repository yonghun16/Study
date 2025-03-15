// this
//'use strict';

/*-----------------------------------------------------
 * 모든 실행 컨텍스트에 만들어지는 특별한 '객체'
 * this는 static하지 않다. 함수가 호출될 때만 값이 할당
 
 * 호출방식에 따른 this ("어떤 함수가 이 객체를 호출했는가?")
   - 메서드           : 메서드를 호출한 객체
   - 전역 컨텍스트    : Chrome(Window), Node.js(global Object)
   - 일반 함수 호출   : Chrome(Window), Node.js(global Object), (*strict mode -> undefined), 
   - 화살표 함수      : 둘러싸고 있는 함수 (부모 스코프의 this)
   - 이벤트 리스너    : 핸들러가 붙어 있는 DOM 이벤트
   - 생성자 함수(new) : 생성된 인스턴스

 * 참고 url
   - 함수 호출 방식에 의해 결정되는 this - https://poiemaweb.com/js-this
   - [Javascript] this가 this가 아니라고?? = https://velog.io/@gidskql6671/Javascript-this
-----------------------------------------------------*/

// 1.
console.log('\n--- 1. ');
console.log("전역 컨텍스트의 this : ", this);    // {} 빈 객체 출력


// 2.
const calcAge = function(birthYear) {
  console.log('\n--- 2. ');
  console.log(2033 - birthYear);
  console.log("함수 표현식에서의 this : ", this); // 사용된 함수의 object[global]
}
calcAge(1994);


// 3.
const calcAgeArrow = birthYear => {
  console.log('\n--- 3. ');
  console.log(2033 - birthYear);
  console.log("화살표함수의 this : ", this);      // {} ** 빈 객체 ** -> 부모 함수의 object[global]
  // ↑ 호출된 객체가 아닌 외부의 this를 참조
  // ** calcAgeArrow 함수 외부의 this인 global(node.js) 또는 window(브라우저)를 참조함
}
calcAgeArrow(1994);


// 4.
const profile = {
  firstName: 'Kevin',
  year: 1992,
  calcAge: function() {
    console.log("메서드에서의 this : ", this);    // { firstName: 'kevin', year: 1992, calcAge: [Function: calcAge] }
    return 2033 - this.year;                      // 2033 - 1922(profile.year)
  },
  // 7.
  greet: () => console.log(`안녕 ${this.firstName}`), // undefiend 출력, 
                                                      // parent scope는 global scope임.  global scope에서 this 키워드 사용.
  // 8.
  greet2: function() { console.log(`안녕 ${this.firstName}`); }
}
console.log('\n--- 4. ');
console.log(profile.calcAge());

console.log('\n--- 7. ');
profile.greet();

console.log('\n--- 8. ');
profile.greet2();


// 5.
console.log('\n--- 5. ');
const anotherProfile = {
  firstName: 'Sara',
  year: 1986,
}
anotherProfile.calcAge = profile.calcAge;   //anotherProfile의 calcAge 메서드가 profile의 calcAge를 참조함
console.log(anotherProfile.calcAge());      // 2033 - 1986(anotherProfile.year)


// 6.
console.log('\n--- 6. ');
const foo = profile.calcAge;              
console.log(foo());                         // foo는 함수고, profile는 객체다.
                                            // profile.year를 참조 할 수 있는 property가 foo()에는 없기 때문에 
                                            // NaN이 출력된다.
