/* Generic_tree */
/* 제네릭은 타입을 함수의 매개변수처럼 동적으로 받을 수 있게 해줍니다.
  •	제네릭은 타입을 동적으로 지정할 수 있도록 돕습니다.
  •	함수, 클래스, 인터페이스, 타입 별칭 등에 사용됩니다.
  •	제약 조건(extends)과 기본값을 사용할 수 있어 더욱 강력하고 유연한 타입 시스템을 제공합니다.
*/

// 함수에서 제네릭 사용
console.log()
console.log("== 함수에서 제네릭 사용 ==")
function identity<T>(arg: T): T {
  return arg;
}

const result1 = identity<string>("Hello1"); // T를 string으로 지정
console.log(result1);
const result2 = identity<number>(42); // T를 number로 지정
console.log(result2);


// 제네릭의 클래스 사용
console.log()
console.log("== 제네릭의 클래스 사용 == ")
class Box<T> {
  contents: T;

  constructor(value: T) {
    this.contents = value;
  }

  getContents(): T {
    return this.contents;
  }
}

const stringBox = new Box<string>("Hello2");
console.log(stringBox.getContents()); // "Hello"

const numberBox = new Box<number>(123);
console.log(numberBox.getContents()); // 123


// 인터페이스에서 제네릭 사용
console.log()
console.log("== 인터페이스에서 제네릭 사용 ==")
interface Pair<K, V> {
  key: K;
  value: V;
}

const pair: Pair<string, number> = { key: "age", value: 30 };
console.log(pair)
