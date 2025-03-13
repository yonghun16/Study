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
-----------------------------------------------------*/

// 1.
console.log('1. ');
console.log(this);                 // {} 빈 객체 출력


// 2.
const calcAge = function(birthYear) {
  console.log('2. ');
  console.log(2033 - birthYear);
  console.log(this);               // 사용된 함수의 global object
}
calcAge(1994);


// 3.
const calcAgeArrow = birthYear => {
  console.log('3. ');
  console.log(2033 - birthYear);
  console.log(this);               // 부모 함수의 global object
}
calcAgeArrow(1994);


// 4.
const profile = {
  firstName: 'Kevin',
  year: 1992,
  calcAge: function() {
    console.log(this)
    return 2033 - this.year;       // 2033 - 1922(profile.year)
  },
  // 7.
  greet: () => console.log(`안녕 ${this.firstName}`), // undefiend, parent scope는 global scope, global scope에서 this 키워드 사용.
  // 8.
  greet2: function() { console.log(`안녕 ${this.firstName}`); }
}
console.log('4. ');
console.log(profile.calcAge());
console.log('7. ');
profile.greet();
console.log('8. ');
profile.greet2();


// 5.
const anotherProfile = {
  firstName: 'Sara',
  year: 1986,
}
anotherProfile.calcAge = profile.calcAge;
console.log('5. ');
console.log(anotherProfile.calcAge());    // 2033 - 1986(anotherProfile.year)


// 6.
const foo = profile.calcAge;              
console.log('6. ');
console.log(foo());                       // foo는 함수고, profile는 객체다.
                                          // profile.year를 참조 할 수 있는 property가 foo()에는 없기 때문에 
                                          // NaN이 출력된다.
