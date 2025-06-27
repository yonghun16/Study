/* ✅ 1. 기본 Map 다루기 */
// 문제:
// 1) 빈 Map 생성
// 2) 'name' → 'Alice', 'age' → 25, 'city' → 'Seoul' 데이터를 저장
// 3) 'age'가 존재하는지 확인 후 출력
// 4) 전체 요소 개수 출력
// 5) 'city' 값을 출력

// 조건: Map의 메서드를 모두 사용하여 출력하세요.

// 1)
const myMap1 = new Map();

// 2)
myMap1.set('name', 'Alice');
myMap1.set('age', 25);
myMap1.set('city', 'Seoul');

console.log(myMap1)

// 3)
console.log(myMap1.has('age'))

// 4)
console.log(myMap1.size)

// 5)
console.log(myMap1.get('city'))



/* ✅ 2. 객체 키를 가진 Map 만들기 */
console.log('\n');
// 문제:
// 1) 빈 Map 생성
// 2) {id:1} 객체를 키로 '객체1', {id:2} 객체를 키로 '객체2' 저장
// 3) 각 객체를 키로 값을 잘 조회할 수 있는지 확인
// 4) 키 객체의 프로퍼티를 바꾼 후에도 조회가 가능한지 확인하고 이유를 주석으로 설명

// 조건: 객체 키의 동등성(identity)이 중요함을 이해하세요.

// 1) 빈 Map 생성
const myMap2 = new Map();

// 2) 객체 키 선언
const obj1 = { id: 1 };
const obj2 = { id: 2 };

// 3) Map에 객체를 키로 저장
myMap2.set(obj1, '객체1');
myMap2.set(obj2, '객체2');

console.log(myMap2)

// 4) 각 객체 키로 값 조회
console.log(myMap2.get(obj1)); // '객체1'
console.log(myMap2.get(obj2)); // '객체2'

// 5) 똑같이 생긴 새 객체로 같은 키 시도
const anotherObj1 = { id: 1 };
console.log(myMap2.get(anotherObj1)); // undefined

// 🔎 이유 설명:
// obj1와 anotherObj1은 생긴 건 같지만, 서로 다른 "참조값"을 가진 별개의 객체입니다.
// Map은 객체 키를 '값'이 아닌 '참조'로 비교하므로 키로 인식하지 못합니다.



/* ✅ 3. Map 데이터 배열 변환 및 처리 */
console.log('\n');
// 문제:
// 1) 아래 Map 데이터를 생성하세요.
// const userMap = new Map([
//   ['user1', {score: 80}],
//   ['user2', {score: 95}],
//   ['user3', {score: 50}],
//   ['user4', {score: 75}],
// ]);

// 2) 점수(score)가 70 이상인 사용자만 필터링해 새로운 배열 생성
// 3) 필터된 배열을 점수 기준 내림차순 정렬
// 4) 최종 결과를 콘솔에 출력

// 조건: Map의 entries()와 Array 메서드(filter, sort)를 활용하세요.

// 1) Map 생성
const userMap = new Map([
  ['user1', { score: 80 }],
  ['user2', { score: 95 }],
  ['user3', { score: 50 }],
  ['user4', { score: 75 }],
]);

// 2) Map → 배열로 변환
const userArray = Array.from(userMap.entries());  // from() : **유사 배열(iterable)**이나 이터러블 객체를 **진짜 배열(Array)**로 변환해주는 함수
// 또는 [...userMap]

// 3) 점수 70 이상만 필터링
const filteredUsers = userArray.filter(([_, value]) => value.score >= 70);

// 4) 점수 기준 내림차순 정렬
filteredUsers.sort((a, b) => b[1].score - a[1].score);

// 5) 출력
console.log(filteredUsers);
