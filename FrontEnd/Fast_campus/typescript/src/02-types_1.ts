// 타입 종류


// 문자
let str: string;
let red: string = "Red";
let green: string = "Green";
let yourColor: string = 'Your Color is ' + red + ' or ' + green;


// 숫자
let num: number;
let integer: number = 6;
let float: number = 3.14;
let infinity: number = Infinity;
let nan: number = NaN;


// 불린
let isBoolean: boolean;
let isDone: boolean = true;


// Null / Undefined
let nul: null
let und: undefined
nul = null  // null로 초기화해야 출력 가능 : 굉장이 유용하지 않음 -> 사용할 일 거의 없음.
console.log(nul)
console.log(und)

let num2: number = 1234;
console.log(num2)


/* 배열 */
const fruits: string[] = ['apple', 'banana', 'orange'];
const numbers: number[] = [1, 2, 3];
const union: (string | number)[] = [1, 'apple', 2, 'banana', 3, 'orange'];


/* 객체 */
const obj: object = {}
const arr: object = []
const func: object = function() { }  // object 타입은 엄격하지 않아서 잘 쓰이지 않는다.

const userA: {
  name: string,
  age: number,
  isValid: boolean
} = {
  name: 'Heropy',
  age: 85,
  isValid: true,
}

const userB: {
  name: string
  age: number
  isValid: boolean
} = {
  name: 'Neo',
  age: 22,
  isValid: false
}

// Alias type
type User21 = {     // type을 미리 저장하고 새로운 object에 적용 할 수 있다.
  name: string
  age?: number
  isValid: boolean
}

const mike: User21 = {
  name: 'Mike',
  age: 13,
  isValid: true
}


/* 인터페이스 */
interface User {
  name: string,
  age: number
  isValid: boolean
}

const userC: User = {  // 인터페이스를 사용한 객체
  name: 'Morpheus',
  age: 35,
  isValid: true
}


/* 함수 */
// - 1
const add: (x: number, y: number) => number = (x, y) => {
  return x + y
}
const a: number = add(1, 2)
console.log(a)

// - 2
const add2: (x: number, y: number) => number = function (x, y) {
  return x + y
}
const b: number = add2(1, 2)
console.log(b)

// -3
function add3(x: number, y: number): number {
  return x + y
}
console.log(add3(4, 5))

// -4
const add4 = (x: number, y: number): number => {
  return x + y;
}
console.log(add4(1, 4))

// -5
const hello2: () => void = function () {
  console.log('Hello world~')
}
const h: void = hello2()

// -6
const add6 = function (x: number, y: number) {
  return x + y;
}
console.log(add6(1, 4))

// -7
const add7 = (x: number, y: number) => {
  return x + y;
}
console.log(add7(2, 4))

