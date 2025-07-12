# Types


## 📦 기본 자료형 (Primitive Types)
| 자료형    | 설명 | 예시 |
|-----------|------|------|
| `number`  | 숫자형 (정수, 실수) | `let a: number = 10;` |
| `string`  | 문자열 | `let b: string = "hello";` |
| `boolean` | 불리언 (참/거짓) | `let c: boolean = true;` |
| `null`    | 값이 없음 | `let d: null = null;` |
| `undefined` | 초기화되지 않음 | `let e: undefined = undefined;` |
| `bigint`  | 매우 큰 정수 | `let f: bigint = 9007199254740991n;` |
| `symbol`  | 고유 식별자 | `let g: symbol = Symbol("id");` |


## 🧱 참조 자료형 (Object Types)
| 자료형     | 설명               | 예시                                    |
|------------|--------------------|-----------------------------------------|
| `object`   | 일반 객체 타입     | `let o: object = { name: "Lee" };`      |
| `Array<T>` | 제네릭 배열 타입   | `let arr: number[] = [1, 2, 3];`        |
| `tuple`    | 고정 길이 배열     | `let t: [string, number] = ["age", 30];` |
| `enum`     | 열거형 타입        | `enum Color { Red, Green }`             |
| `function` | 함수 타입          | `let f: (x: number) => number = x => x * 2;` |
| `class`    | 클래스 타입        | `class User { name: string; }`          |


## 🔁 특수 자료형
| 자료형    | 설명 | 예시 |
|-----------|------|------|
| `any`     | 모든 자료형 허용 (비추천) | `let a: any = 123;` |
| `unknown` | any보다 안전한 미지의 타입 | `let b: unknown = 10;` |
| `void`    | 반환값 없음 (주로 함수에서 사용) | `function log(): void {}` |
| `never`   | 절대 반환하지 않음 (에러, 무한루프) | `function fail(): never { throw new Error(); }` |
| `union`   | 여러 타입 중 하나 | `let c: number \| string = "hi";` |
| `literal` | 리터럴 고정 값 | `let d: "left" \| "right" = "left";` |


## 타입 예시
```ts
// 기본 타입
let age: number = 30;
let name: string = "Alice";
let isActive: boolean = true;

// 배열과 튜플
let nums: number[] = [1, 2, 3];
let user: [string, number] = ["Alice", 30];

// 객체
let person: { name: string; age: number } = { name: "Bob", age: 25 };

// 유니언 타입
let code: string | number = "abc";
let a: string[] | number[];       // string 배열 또는 number 배열 (OK)
let b: (string | number)[];       // string과 number를 섞은 배열 (괄호 필요)

// 함수 반환 타입
function greet(name: string): string {
  return "Hello, " + name;
}
```
