# 타입 가드 (type guard)


## ✅ 타입 가드의 필요성
타입스크립트(TypeScript)의 **타입 가드(Type Guard)**는 값의 타입을 런타임에 좁혀서 TypeScript가 그 값에 대해 더 정확한 타입을 추론할 수 있도록 도와주는 코드 패턴 또는 문장입니다.

쉽게 말해, 조건문을 통해 특정 타입인지 확인하고, 그 안에서는 타입이 확실하게 좁혀지는 방식입니다.


## 🔍 기본 사용 예시

### 1. typeof를 활용한 타입 가드

```ts
function printLength(value: string | number) {
  if (typeof value === 'string') {
    // 여기서 value는 string으로 추론됨
    console.log(value.length);
  } else {
    // 여기서 value는 number로 추론됨
    console.log(value.toFixed(2));
  }
}
```

### 2. instanceof를 활용한 타입 가드 (클래스)
```ts
class Dog {
  bark() {
    console.log('멍멍!');
  }
}

class Cat {
  meow() {
    console.log('야옹!');
  }
}

function makeSound(pet: Dog | Cat) {
  if (pet instanceof Dog) {
    pet.bark(); // Dog 타입으로 추론됨
  } else {
    pet.meow(); // Cat 타입으로 추론됨
  }
}
```

### 💡 사용자 정의 타입 가드 (Custom Type Guard)
```ts
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function move(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet.swim();  // pet은 Fish로 추론됨
  } else {
    pet.fly();   // pet은 Bird로 추론됨
  }
}
```

### 📋 정리: 타입 가드 종류
| 구문 종류       | 설명                                 |
|----------------|---------------------------------------|
| `typeof`       | 기본 타입(string, number 등) 판별     |
| `instanceof`   | 클래스 인스턴스 여부 확인             |
| `in` 연산자    | 특정 속성이 존재하는지 확인           |
| 사용자 정의 함수 | `param is Type` 형식으로 직접 작성  |
