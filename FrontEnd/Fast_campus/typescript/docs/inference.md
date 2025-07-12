# 타입 추론 (Type Inference)

타입스크립트(TypeScript)의 **타입 추론(Type Inference)**은 개발자가 명시적으로 타입을 지정하지 않아도, 코드의 문맥을 분석해 타입스크립트가 자동으로 타입을 유추하는 기능입니다. 

이 기능 덕분에 코드를 더 간결하게 작성할 수 있으면서도 정적 타입의 이점을 그대로 누릴 수 있습니다.


## 🧠 1. 기본 개념
타입스크립트는 다음과 같은 경우에 타입을 자동으로 추론합니다:
| 상황               | 설명                                           |
|--------------------|------------------------------------------------|
| 변수 초기화        | 변수 선언 시 값을 할당하면 타입을 추론         |
| 함수 반환값        | 함수 내부 로직으로 반환 타입을 추론            |
| 매개변수 디폴트 값 | 기본값으로 파라미터 타입을 추론                |
| 객체 리터럴        | 객체 속성의 타입을 추론                        |
| 상수 vs 변수       | `const`는 리터럴 타입, `let`은 일반 타입으로 추론 |


## 📌 2. 예시로 보는 타입 추론 

### 📍변수 선언 시 추론
```ts
let num = 10;  // number
let name = "Alice";  // string
let isActive = true; // boolean
```
명시적으로 타입을 쓰지 않아도 TypeScript는 10은 number, "Alice"는 string이라고 자동 추론합니다.
```ts
let greeting = "hello";
greeting = 123;  // ❌ Error: number is not assignable to string
```

### 📍함수 반환값 추론
```ts
function add(a: number, b: number) {
  return a + b;
}
```
이 함수의 반환값은 명시적으로 쓰지 않아도 number로 추론됩니다.
```ts
const result = add(1, 2);  // result: number
```

### 📍매개변수 기본값
```ts
function greet(name = "Guest") {
  return `Hello, ${name}`;
}
```
여기서 name의 타입은 자동으로 string으로 추론됩니다.

### 📍객체와 배열 추론
```ts
const user = {
  id: 1,
  username: "admin"
};
```
user는 다음과 같은 타입으로 추론됩니다:
```ts
{
  id: number;
  username: string;
}
```
배열도 마찬가지입니다:
```ts
const numbers = [1, 2, 3]; // number[]
const names = ["Alice", "Bob"]; // string[]
```


## 🧠 3. Best Common Type (최적 공통 타입)
```ts
const arr = [1, 2, 3, null];
```
이런 경우 타입스크립트는 number | null로 추론합니다. 여러 타입이 혼합된 배열이나 구조에서는 가장 일반적인 타입의 합집합으로 추론합니다.


## ⚠️ 4. 추론되지 않는 경우
변수만 선언하고 값을 나중에 할당하면 any로 추론됩니다.
```ts
let something;  // something: any
something = "hello";
something = 123;
```
이 경우 암시적 any가 되어 타입 안정성이 떨어지므로, 명시적 타입 선언을 권장합니다.
```ts
let something: string;
something = "hello";  // ✅
```


## 🛠 5. 타입 추론을 잘 쓰는 팁
| 상황            | 권장 사항                           |
|-----------------|-------------------------------------|
| 값이 명확할 때  | 타입 생략 OK                        |
| 매개변수 타입   | 가급적 명시적으로 작성              |
| 객체 리터럴 반환| `as const`로 추론 강화 가능         |
| 배열 리터럴     | 혼합 타입이면 타입 명시 필요        |


## 6. ✅ 결론

타입스크립트의 타입 추론은 다음과 같은 장점을 제공합니다:
- 코드의 간결성 유지
- 정적 타입 검사로 오류 사전 방지
- 가독성 향상 및 생산성 증가

하지만, 모든 타입을 추론에만 의존하면 타입 안정성이 떨어질 수 있기 때문에, 함수 인자나 외부 입력은 명시적인 타입 선언을 병행하는 것이 좋습니다.
