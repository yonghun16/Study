// Array

/*-----------------------------------------------------
 * 배열(Array)는 
   - 인덱스 기반의 자료구조
   - 순서를 고려한다.
-----------------------------------------------------*/

// Array
const fruit1 = 'apple';
const fruit2 = 'banana';
const fruit3 = 'kiki';
const fruits = [fruit1, fruit2, fruit3];
console.log(fruits);
const differentTypeArray = ['hello, 23, true null'];
console.log(differentTypeArray)

console.log(fruits[2]);
console.log(fruits.length);
fruits[2] = 'mango';   // 참조의 재할당은 못하지만, 참조 객체 자체는 변경 가능
console.log(fruits);

const birthYearArray = [1990, 1993, 1998];
const agesArray = birthYearArray.map(birthYearValue => 2023 - birthYearValue);
console.log(agesArray);


// method
const cars = ['hyndai', 'bmw', 'audi'];

// add element
cars.push('toyata');  // last
console.log(cars)
cars.unshift('kia');  // first
console.log(cars)

// remove element
cars.pop();           // last
console.log(cars);
cars.shift();         // first
console.log(cars);

// get Index
console.log(cars.indexOf('bmw'));      // 1

// is contain
console.log(cars.includes('audi'));    // true
console.log(cars.includes('volvo'));   // false

// 여러 개의 배열 연결
const array1 = [1,2,3];
const array2 = [4,5,6];
const combinedArray = [...array1, ...array2];
console.log(combinedArray);
