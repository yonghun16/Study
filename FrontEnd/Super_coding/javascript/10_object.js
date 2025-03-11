// Objects

/*-----------------------------------------------------
 * 객체(Object)는 **키(key)와 값(value)**으로 구성된 데이터 구조.
   여러 값을 하나의 단위로 관리할 수 있는 자료형.
   순서를 고려하지 않는다.

   1.	키-값 쌍(Key-Value Pair) : 속성(property)이라고 하며, 키는 문자열 또는 심볼, 값은 어떤 자료형이든 가능.
   2.	동적 변경 가능           : 속성을 추가, 수정, 삭제할 수 가능.
   3.	메서드 포함 가능         : 값으로 함수를 가질 수 있고, 이를 메서드(method)라고 함.
   4.	프로토타입 기반          : 객체는 다른 객체를 상속받을 수 있음.(프로토타입 체인).
-----------------------------------------------------*/

// Key-Value Pair
const profile = {
  firstName: 'Kevin',         // data property
  lastName: 'Kim',
  age: 30,
  job: 'engineer',
  isMarried: false,
  greet: function() {         // method property
    return "hello! " + this.firstName;
  }
};

console.log(profile)
console.log(profile.firstName);     // data property
console.log(profile.greet());       // method property
console.log(profile['lastName']);   // index 대신 key 사용


// 여러개의 오브젝트 연결
const obj1 = {
  name: 'Song',
  age: 38
};

const obj2 = {
  address : 'Seoul',
  job: 'engineer'
};

const combinedObject = {
  ...obj1,
  ...obj2
}

console.log(combinedObject);
console.log()

// 검색 : Javascript Object Method
console.log(Object.keys(combinedObject));                                   // key 찾기
console.log(Object.keys(combinedObject).map(key => combinedObject[key]));   // value 찾기
console.log()


// 객체 생성 방법
// 1. 객체 리터럴 방식
const person = {
  name: "Alice",
  age: 25,
  greet: function() {
    console.log(`Hello, my name is ${this.name}.`);
  }
};
person.greet(); // Hello, my name is Alice.

// 2. 생성자 함수 방식
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const person1 = new Person("Bob", 30);
console.log(person1.name); // Bob

// 3. class 문법 (ES6)
class Animal {
  constructor(type) {
    this.type = type;
  }
  speak() {
    console.log(`${this.type} is making a sound.`);
  }
}
const dog = new Animal("Dog");
dog.speak(); // Dog is making a sound.

// 4. Object.create() 이용
const prototypeObj = {
  greet() {
    console.log("Hello!");
  }
};
const obj = Object.create(prototypeObj);
obj.greet();   // Hello!
