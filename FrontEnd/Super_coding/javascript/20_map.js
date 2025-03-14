// map

/*-----------------------------------------------------
 * Map 
   - ES6에서 추가된 Key-Value 타입의 집합
   - Key는 중복해서 들어갈 수 없다.
   - 이터러블(iterable)

 * Map VS Object
   1) Key
     - Object : 키는 '문자열' 또는 '심볼'만 될 수 있다. 숫자나 다른 타입을 사용하면 자동으로 문자열로 변환.
     - Map    : 키는 '모든 데이터 타입'을 사용할 수 있다. 문자열, 숫자, 객체, 심지어 '함수'도 키로 사용할 수 있다.
   2) Key의 순서
     - Object : non iterable
     - Map    : iterable
   3) Size
     - Object : 내장된 size 속성을 제공하지 않음
     - Map    : 내장된 size 속성을 제공하여 바로 크기를 알 수 있다.
   4) 성능
     - Object : 키가 문자열일 때, Object는 성능상 더 빠를 수 있습니다. 그러나 동적일 땐 Map은 성능상 더 빠을 수 있음
     - Map    : 키의 크기가 크고 삽입과 삭제가 빈번한 경우 더 나은 성능을 제공
   5) 메서드
     - Object : Object에는 hasOwnProperty()와 같은 몇 가지 메서드가 있다.
     - Map    : Map은 set(), get(), delete(), has(), clear()와 같은 메서드를 제공하여 데이터를 더 직관적으로 처리할 수 있다.
-----------------------------------------------------*/

// Map
// 1.
console.log('\n--- 1.');
const thisIsMap = new Map();
thisIsMap.set(1, 'this is 1');
thisIsMap.set(true, 'this is true');
thisIsMap.set('aa', 'this is aa');
console.log(thisIsMap);
console.log(thisIsMap.get(1));         // get(key)
console.log(thisIsMap.get(true));
console.log(thisIsMap.get(2));         // undefined

// 2.
console.log('\n--- 2.');
for (const element of thisIsMap) {
  console.log(element);                // thisIsMap key, value 출력
}

//3. 
console.log('\n--- 3.');
thisIsMap.delete(1);                   // map의 1이란 key를 삭제
for (const element of thisIsMap) {
  console.log(element);
}
