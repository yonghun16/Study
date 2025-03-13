// Objects

/*-----------------------------------------------------
 * 객체(Object)는 
   - 키 기반의 Key-Value Pair로 구성된 데이터 구조.
   - 순서를 고려하지 않는다.

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
  },
  eat: function() {
    console.log(`${this.name} now eating.`);
  }
};
person.greet(); // Hello, my name is Alice.
person.eat();


// 2. Object.create() 이용 방식
const personPrototype = {
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  },
  eat() {
    console.log(`${this.name} now eating.`);
  }
};
const jack = Object.create(personPrototype, {
  name: { value: "jack" }
});
jack.age = 39;
jack.greet();
jack.eat();


// 3. 생성자 함수 방식
function Person1(name, age) {
  this.name = name;
  this.age = age;
}
Person1.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}.`);
};
Person1.prototype.eat = function() {
  console.log(`${this.name} now eating.`);
};

const bob = new Person1("Bob", 25);
bob.greet();
bob.eat();


// 4. class 문법 (ES6)
class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // 메서드는 자동으로 프로토타입에 추가됨
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }

  eat() {
    console.log(`${this.name} now eating.`);
  }
}

// 새로운 객체 생성
const jake = new Person2("Jake", 23);

jake.greet();
jake.eat();
