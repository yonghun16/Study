# call signature


TypeScript에서 **콜 시그니처(Call Signature)**는 “함수처럼 호출 가능한 객체”를 설명할 때 사용하는 타입 문법입니다. 쉽게 말해, 어떤 **함수 타입의 형태(인자, 반환값)**를 명시할 때 사용됩니다.


## ✅ 기본 문법
```ts
type 함수타입 = (매개변수: 타입, ... ) => 반환타입;
```
```ts
// ex
type Add = (x: number, y: number) => number;

const add: Add = (x, y) => x + y;
```


## ✅ 객체에 콜 시그니처를 포함하는 형태

콜 시그니처는 객체 타입 안에서도 함수 호출이 가능한 형태를 기술할 수 있습니다.

```ts
type Logger = {
  (message: string): void; // 콜 시그니처
  prefix: string;
};

const logger: Logger = (msg: string) => {
  console.log(logger.prefix + msg);
};
logger.prefix = '[Info] ';
logger('Hello');
```


## ✅ 함수 오버로드를 표현할 때도 사용
```ts
type Overloaded = {
  (x: number): number;
  (x: string): string;
};

const over: Overloaded = (x: number | string): any => x;
```

## ✅ 왜 필요할까?
| 상황                             | 예시                                          | 설명                       |
|----------------------------------|-----------------------------------------------|----------------------------|
| 함수 타입 재사용                | `type Fn = (a: string) => void;`              | 함수의 형태를 이름으로 정의 |
| 속성 + 함수 모두 표현해야 할 때 | `type Logger = { (msg: string): void; level: string };` | 함수처럼 호출되는 객체     |
| 함수 오버로딩 표현              | `type Fn = { (a: number): void; (a: string): void; };` | 여러 입력 시그니처 표현   |


## ✅ 콜 시그니처와 인터페이스의 차이

콜 시그니처는 함수의 형태를 정의할 때 쓰이고, 인터페이스는 객체의 형태를 정의할 때 더 일반적으로 사용됩니다. 하지만 둘 다 함수를 정의할 수 있으며, 아래처럼 거의 동등하게 사용할 수 있습니다.

| 비교 항목            | 콜 시그니처 (타입 별칭)                   | 인터페이스                           |
|----------------------|-------------------------------------------|--------------------------------------|
| 함수 타입 정의 방법  | `type MyFunc = (x: number) => number;`    | `interface MyFunc { (x: number): number; }` |
| 속성 추가 가능 여부  | 가능 (객체로 정의 시)                     | 가능                                 |
| 상속 (extends) 지원  | ❌ (다른 타입에서 상속 안 됨)             | ✅ 가능                              |
| 선언 병합 지원       | ❌                                        | ✅ 가능                              |


### ✅ 예시: 둘 다 함수 타입 정의 가능
```ts
// 타입 별칭 (콜 시그니처)
type Add = (x: number, y: number) => number;

// 인터페이스로 함수 정의
interface AddInterface {
  (x: number, y: number): number;
}

const add1: Add = (x, y) => x + y;
const add2: AddInterface = (x, y) => x + y;
```

### ✅ 예시: 속성 + 함수 동시에 가질 때
```ts
// 타입 별칭
type Logger = {
  (msg: string): void;
  prefix: string;
};

// 인터페이스
interface Logger2 {
  (msg: string): void;
  prefix: string;
}
```


## ✅ 콜 시그니처를 implements에 쓸 수 있나?

implements 키워드는 클래스가 인터페이스를 구현할 때 사용하는데, 클래스는 함수처럼 호출될 수 없기 때문에 콜 시그니처만 있는 인터페이스는 implements 할 수 없습니다.


### ❌ 콜 시그니처만 있는 인터페이스는 클래스에 implements 불가
```ts
interface Callable {
  (x: number): number;
}

class MyFunc implements Callable {
  // ❌ 오류: 클래스는 함수처럼 호출할 수 없다
  call(x: number): number {
    return x;
  }
}
```

### ✅ 대신 '함수 + 속성'을 포함한 객체로는 사용 가능
```ts
interface Callable {
  (x: number): number;
  description: string;
}

const callable: Callable = (x: number) => x * 2;
callable.description = "곱하기 2 함수";
```

