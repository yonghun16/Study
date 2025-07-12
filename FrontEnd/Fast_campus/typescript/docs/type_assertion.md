# 🧠 타입 단언(Type Assertion)이란?

컴파일러에게 “개발자인 내가 이 값의 타입을 더 잘 알고 있으니 이 타입으로 간주하라”고 말하는 기능입니다.

- TypeScript가 자동으로 추론한 타입보다 명시적으로 타입을 강제할 때 사용합니다.
- 런타임에는 아무런 영향이 없습니다 (오직 컴파일 단계에서만 사용)

## ✍️ 문법
```ts
// 방법 1: angle-bracket 문법
let value = <string>someValue;

// 방법 2: as 문법 (JSX나 React에서는 이걸 권장)
let value = someValue as string;

// 방법 3 : ! 문법 (이 연산자는 값이 null이나 undefined가 아님을 컴파일러에게 단언(assert)하는 역할을 함.)
const el = document.getElementById("box")!;
```

## 📌 예시 코드
```ts
let someValue: any = "TypeScript";

// 컴파일러는 someValue의 길이를 알 수 없음
let length1 = (<string>someValue).length;
let length2 = (someValue as string).length;

console.log(length1);  // 10
console.log(length2);  // 10
```

```ts
const el = document.getElementById("box");
// el의 타입은 HTMLElement | null
el.innerHTML = "Hello"; // ❌ 오류: el이 null일 수 있음

// if 사용 : 굳이 단언을 하지 않아도 에러를 없앨 수 없음
const el = document.getElementById("box");
if (el) {
  el.innerHTML = "Hello"; // ✅ 안전함
}

// el의 타입을 HTMLElement로 단언 : 만약 box El이 없다면, 보여줘야 할 error을 받지 않게됨. -> 단언은 확실할 때만 쓰는게 좋음. 
const el = document.getElementById("box")!;
el.innerHTML = "Hello"; // ✅ el은 절대 null이 아님을 단언

```


## 🎯 언제 사용할까? 
| 상황 | 설명 | 예시 |
|------|------|------|
| DOM 요소 접근 | `document.getElementById`의 반환값이 `HTMLElement \| null` 이므로 단언 필요 | `const el = document.getElementById("box") as HTMLDivElement;` |
| `any`, `unknown` 사용 후 구체화 | API 응답 처리 시 타입을 확정해야 할 때 | `let data = response as MyResponseType;` |
| 좁은 타입으로 단언 | 넓은 타입 → 구체적인 타입 | `let input = value as string;` |


## 🔍 타입 단언 vs 타입 변환
- 타입 단언은 런타임에 타입을 바꾸지 않습니다. 단지 컴파일러가 이해하는 타입만 바꾸는 것입니다.
```ts
let num = "123" as unknown as number;   // 🚫 문자열을 실제로 number로 바꾸는 게 아님
```

## ⚠️ 주의: 타입 단언은 위험할 수 있음
```ts
let element = document.getElementById("myDiv") as HTMLImageElement;
element.src = "logo.png"; // ❗div 태그인데 src를 사용하려 하면 런타임 오류 발생 가능
```
