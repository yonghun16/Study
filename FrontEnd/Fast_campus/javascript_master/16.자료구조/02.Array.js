/*
📝 연습문제

문제 1: 배열 선언 및 접근

아래 조건에 맞는 코드를 작성하세요.
  1.	숫자 10, 20, 30을 요소로 가지는 배열을 선언
  2.	배열의 첫 번째 요소를 출력
  3.	배열의 마지막 요소를 출력 (length 사용)
*/

const array1 = [10, 20, 30];
console.log(array1[0])
console.log(array1[array1.length - 1])


console.log('\n');
/*
📝 연습문제

문제 2: 배열 요소 조작

다음 작업을 수행하는 코드를 작성하세요.
  1.	빈 배열을 만들고, 숫자 1, 2, 3을 차례대로 push로 추가하세요.
  2.	배열의 앞에 숫자 0을 unshift로 추가하세요.
  3.	배열에서 마지막 요소를 pop으로 제거하고, 제거한 값을 출력하세요.
  4.	배열에서 첫 번째 요소를 shift로 제거하고, 제거한 값을 출력하세요.
  5.	배열 중간 인덱스 1 위치에 숫자 99를 splice로 추가하세요.
*/

// 1)
const array2 = [];
array2.push(1);
array2.push(2);
array2.push(3);

// 2)
array2.unshift(0)
console.log(array2);

// 3)
const popNum = array2.pop()
console.log(popNum);
console.log(array2);

// 4)
const shiftNum = array2.shift()
console.log(shiftNum);
console.log(array2);

// 5)
array2.splice(1, 0, 99);
console.log(array2);


console.log('\n')
/*
📝 연습문제

문제 3: 고차 함수 활용하기

아래 조건에 맞는 코드를 작성하세요.
  1.	[10, 15, 20, 25, 30] 배열을 선언하세요.
  2.	forEach를 사용해 각 요소를 콘솔에 출력하세요.
  3.	map을 사용해 모든 요소를 2배로 만든 새 배열을 출력하세요.
  4.	filter를 사용해 20 이상인 값만 걸러낸 새 배열을 출력하세요.
  5.	find를 사용해 18 이상인 첫 번째 요소를 출력하세요.
  6.	reduce를 사용해 모든 요소의 합을 출력하세요.
*/

// 1)
const array3 = [10, 15, 20, 25, 30];

// 2)
array3.forEach((item) => {
  console.log(item);
})

// 3)
const doubleArray3 = array3.map((item) => {
  return item * 2
})
console.log(doubleArray3)

// 4)
const filteredArray3 = array3.filter((item) => {
  return item >= 20;
})

console.log(filteredArray3);

// 5)
const findedArray3 = array3.find((item) => {
  return item >= 18;
})

console.log(findedArray3);

// 6)
const reducedArray3 = array3.reduce((acc, item) => {
  return acc + item
}, 0)

console.log(reducedArray3);


console.log('\n')
/*
📝 연습문제

문제 4: 정렬과 변환
  1.	[100, 25, 40, 10, 60] 배열을 선언하세요.
  2.	오름차순 정렬된 배열을 출력하세요.
  3.	내림차순 정렬된 배열을 출력하세요.
  4.	배열을 문자열로 ' / ' 구분자로 변환해 출력하세요.
  5.	'html,css,javascript' 문자열을 배열로 바꾸고 출력하세요.
*/

// 1)
const array4 = [100, 25, 40, 10, 60]

// 2)
const sorted1Array4 = [...array4].sort((a, b) => {
  return a - b;
})
console.log(sorted1Array4)

// 3)
const sorted2Array4 = [...array4].sort((a, b) => {
  return b - a;
})
console.log(sorted1Array4)

// 4)
const dividedArray4 = array4.join(" / ");
console.log(dividedArray4);

// 5)
const htmlArray = 'html,css,javascript'.split(",");
console.log(htmlArray);


console.log('\n');
/*
📝 연습문제

문제 5: 반복 연습

다음 조건을 만족하는 코드를 작성하세요.
  1.	['apple', 'banana', 'cherry'] 배열 선언
  2.	for문으로 인덱스와 값을 함께 출력
  3.	for...of로 요소 값만 출력
  4.	forEach()로 인덱스와 값 출력
  5.	entries()와 for...of를 조합해서 출력
*/

// 1)
const array5 = ['apple', 'banana', 'cherry'];

// 2)
for (let i = 0; i < array5.length; i++) {
  console.log(i, array5[i]);
}

// 3)
for (let item of array5) {
  console.log(item);
}

// 4)
array5.forEach((item, i) => { console.log(i, item) })

// 5)
for (let [index, value] of array5.entries()) {
  console.log(index, value);
}


console.log('\n')
/*
📝 연습문제

문제 6: 얕은 복사 vs 깊은 복사 실습
  1.	[1, 2, 3]을 담은 배열 arr1을 선언하세요.
  2.	arr2를 arr1의 얕은 복사본으로 만들고, arr2[0] = 100으로 수정 후 arr1을 출력하세요.
  3.	arr3를 arr1의 깊은 복사본으로 만들어, arr3[0] = 200으로 수정 후 arr1을 출력하세요.
  4.	2차원 배열 [[1, 2], [3, 4]]를 복사할 때 얕은 복사일 경우 생기는 문제를 arr4, arr5로 실습해보세요.
*/

// 1)
const arr1 = [1, 2, 3];

// 2)
const arr2 = arr1;     // 얕은 복사 (같은 참조)
arr2[0] = 100;

console.log('arr1:', arr1); // [100, 2, 3]

// 3)
const arr3 = [...arr1];  // 깊은 복사
arr3[0] = 200;

console.log('arr1:', arr1); // 여전히 [100, 2, 3]
console.log('arr3:', arr3); // [200, 2, 3]

// 4)
const arr4 = [[1, 2], [3, 4]];
const arr5 = [...arr4]; // 얕은 복사

arr5[0][0] = 999;

console.log('arr4:', arr4); // [[999, 2], [3, 4]]
console.log('arr5:', arr5); // [[999, 2], [3, 4]]


console.log('\n')
/*
📝 연습문제

문제 7: 2차원 배열 다루기
  1.	다음과 같은 2차원 배열을 선언하세요:
  const board = [
    ['X', 'O', 'X'],
    ['O', 'X', 'O'],
    ['O', 'X', 'X'],
  ];
  2.	for 문을 이용해 행과 열의 값을 모두 출력하세요. (총 9개 출력)
  3.	각 행을 문자열로 'XO' 형태로 출력하세요. (join() 사용)
  4.	전체 값을 1차원 배열로 만들어 출력하세요. (flat() 사용)
*/

// 1)
const board = [
  ['X', 'O', 'X'],
  ['O', 'X', 'O'],
  ['O', 'X', 'X'],
];

// 2)
for (let i = 0; i < board.length; i++) {
  for (let j = 0; j < board[i].length; j++) {
    console.log(board[i][j]);
  }
}

// 3)
for (let row of board) {
  console.log(row.join(''));
}

// 4)
const flatBoard = board.flat();
console.log(flatBoard);
