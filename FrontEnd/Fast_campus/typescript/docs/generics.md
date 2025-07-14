# 제네릭 (generics)

- 타입스크립트의 **제네릭(Generics)**은 함수, 클래스, 인터페이스 등을 다양한 타입에서 재사용할 수 있게 하는 문법입니다.
- 쉽게 말해, 입력되는 타입을 고정하지 않고 **외부에서 주입받아 사용하는 방식**입니다.


## ✅ 왜 제네릭이 필요할까?
```ts
function identity(arg: any): any {
  return arg;
}
```
위 함수는 어떤 타입이든 받아서 그대로 반환하지만, 타입 정보가 any라서 타입 안전성이 떨어지고 자동완성도 지원되지 않습니다.

이를 개선한 게 제네릭입니다:

```ts
function identity<T>(arg: T): T {
  return arg;
}
```

## ✅ 제네릭 기본 문법
```ts
function 함수명<T>(매개변수: T): T
```

### 🔸 함수 예시
```ts
function identity<T>(arg: T): T {
  return arg;
}

const num = identity<number>(10);      // T는 number
const str = identity<string>("hello"); // T는 string
```
- 👉 T는 타입 변수이며, 필요에 따라 U, K, V 등도 사용합니다.


## ✅ 제네릭 인터페이스
```ts
interface Box<T> {
  value: T;
}

const stringBox: Box<string> = { value: "hello" };
const numberBox: Box<number> = { value: 123 };
```


## ✅ 제네릭 클래스
```ts
class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  getItems(): T[] {
    return [...this.data];
  }
}

const stringStorage = new DataStorage<string>();
stringStorage.addItem("apple");

const numberStorage = new DataStorage<number>();
numberStorage.addItem(42);
```


## ✅ 제네릭 타입 제한 (extends)
```ts
function logLength<T extends { length: number }>(input: T): void {
  console.log(input.length);
}

logLength("hello");         // string은 length 속성 있음
logLength([1, 2, 3]);        // 배열도 length 있음
logLength({ length: 5 });    // OK
// logLength(10);            // ❌ number에는 length 없음
```


## ✅ 제네릭 여러 개 사용
```ts
function merge<T, U>(a: T, b: U): T & U {
  return { ...a, ...b };
}

const result = merge({ name: "Yong" }, { age: 30 });
// result는 { name: string; age: number }
```


## ✅ 기본 타입 지정
```ts
function wrap<T = string>(value?: T): T {
  return value!;
}

wrap();           // T는 string
wrap(123);        // T는 number
```


## 📌 요약 표
| 구분             | 문법 예시                                   | 설명                         |
|------------------|---------------------------------------------|------------------------------|
| 기본 제네릭 함수 | `function id<T>(val: T): T { return val; }` | 타입을 외부에서 주입받음     |
| 인터페이스       | `interface Box<T> { value: T }`             | 구조에 제네릭 적용           |
| 클래스           | `class Storage<T> {}`                       | 클래스 내부에서 타입 확장    |
| 제약 조건        | `<T extends Lengthwise>`                    | 특정 속성/형태를 요구함      |
| 여러 제네릭      | `<T, U>(a: T, b: U)`                        | 두 개 이상의 타입 사용 가능  |
| 기본값           | `<T = string>`                              | 제네릭 타입의 기본값 설정    |


## 🤔 정리하자면
- 제네릭은 함수, 클래스, 타입 등에 유연성과 타입 안정성을 부여합니다.
- 재사용성과 추론 기능을 향상시키기 때문에, 타입스크립트에서 매우 중요한 개념입니다.
