// set

/*-----------------------------------------------------
 * Map 
   - ES6에서 추가된 집합 객체
   - 값이 중복해서 들어갈 수 없다.
   - 이터러블(iterable)

 * Set VS Array
   1) 중복 
     - Array : 중복 가능
     - Set   : 중복 불가
   2) 저장 방식
     - Array : index로 기반 저장
     - Set   : value로 기반 저장
   3) 검색 속도
     - Array : O(n) -> 느림
     - Set   : O(1) -> 빠름
   4) 요소 추가, 삭제
     - Array : push(), unshift(), splice()
     - Set   : add(), delete(), clear()
   5) 순회 방식
     - Array : forEach(), map()
     - Set   : forEacth, for...of
   6) 크기 확인
     - Array : length
     - Set   : size
-----------------------------------------------------*/

// Set
const thisIsSet = new Set();
thisIsSet.add('pizza');
thisIsSet.add('pasta');
thisIsSet.add(1);
thisIsSet.add(true);


// 1.
console.log('\n--- 1.');
console.log(thisIsSet);
thisIsSet.add('pasta');                   // 중복된 값은 추가하지 않음


// 2.
console.log('\n--- 2.');
console.log(thisIsSet.has('pizza'));      // 값이 존재하면 true
console.log(thisIsSet.has('risotto'));    // 없으면 false

// 3.
console.log('\n--- 3.');
for (const element of thisIsSet) {        // for of
  console.log(element);
}
