# 인덱스 시그니처

타입스크립트의 **인덱스 시그니처(Index Signature)**는 객체의 **속성 이름(key)**과 **속성 값(value)**의 타입을 유연하게 지정할 수 있게 해주는 문법입니다. 

즉, 정확한 속성 이름을 미리 알 수 없을 때 사용합니다.


## ✅ 인덱스 시그니처의 진짜 목적

> “객체의 키 이름이 미리 정해져 있지 않지만, 모든 값들이 동일한 타입이거나 특정한 규칙을 따를 때 타입을 안전하게 지정하기 위해” 사용합니다.

| 사용 사례             | 설명                                                                 |
|----------------------|----------------------------------------------------------------------|
| 사용자 정의 딕셔너리 | 객체의 key가 런타임에 동적으로 생기는 경우                          |
| 폼 에러 메시지       | 각 필드에 대한 에러 메시지를 동적으로 저장                           |
| 환경 설정            | key가 고정되지 않은 여러 설정 값을 하나의 객체에 저장               |
| 로그 핸들러 매핑     | 'debug', 'warn', 'error' 같은 키가 동적으로 확장될 수 있는 경우      |
| 다국어 문자열 저장   | 국가/언어 코드별로 문자열을 저장할 때 (i18n 처리 등)                 |

### 예시 1. 폼 에러 메시지 저장
```ts
type ErrorMap = {
  [fieldName: string]: string;
};

const errors: ErrorMap = {
  email: "이메일은 필수입니다.",
  password: "비밀번호를 입력하세요.",
};
```
- 어떤 필드가 에러를 가질지는 미리 모르지만, 모든 값은 문자열이라는 걸 명시하고 있음.

### 예시 2. 다국어 번역 객체
```ts
type Translations = {
  [locale: string]: string;
};

const i18n: Translations = {
  "en-US": "Hello",
  "ko-KR": "안녕하세요",
  "ja-JP": "こんにちは",
};
```
- locale 키는 무수히 많을 수 있고, 모두 문자열 → 문자열 구조로 된다는 걸 나타냄.

### 예시 3. API 응답 캐시 저장소
```ts
type Cache = {
  [url: string]: string; // JSON 문자열
};

const apiCache: Cache = {
  "/user/profile": '{"name":"Alice"}',
  "/user/settings": '{"theme":"dark"}',
};
```
- API 응답을 URL 기준으로 캐싱할 때, key가 동적이므로 인덱스 시그니처가 필요.


## ✅ 기본 문법
```ts
{
  [key: KeyType]: ValueType;
}
```
- key: 속성 이름 (key)의 변수명
- KeyType: 보통 string 또는 number
- ValueType: 속성 값의 타입


## ✅ 예제

### 1. 문자열 키를 가진 객체
```ts
type StringMap = {
  [key: string]: string;
};

const user: StringMap = {
  name: "Alice",
  email: "alice@example.com",
  // age: 30        // ❌ 오류: 값이 string이 아니므로
};
```

### 2. 숫자 키를 가진 객체
```ts
type NumberMap = {
  [index: number]: boolean;
};

const flags: NumberMap = {
  0: true,
  1: false,
  2: true,
};
```

### 3. 명시적 속성과 인덱스 시그니처 혼용
```ts
type UserScores = {
  name: string;
  [subject: string]: string | number;
};

const score: UserScores = {
  name: "Tom",
  math: 95,
  science: 88,
  // name: 123      // ❌ 오류: name은 string이어야 함
};
```


## ✅ 마크다운 표로 정리
| 요소           | 설명                                         |
|----------------|----------------------------------------------|
| key            | 객체 속성의 이름을 나타낼 변수               |
| KeyType        | 속성 이름의 타입, `string` 또는 `number`     |
| ValueType      | 속성 값의 타입                               |
| 사용 목적      | 속성 이름을 사전에 알 수 없을 때             |
| 유의사항       | 명시적 속성과 타입 충돌이 나지 않도록 주의   |


## ✅ 사용 예: 동적 속성이 있는 설정 객체
```ts
type Config = {
  [env: string]: boolean;
};

const featureToggle: Config = {
  darkMode: true,
  betaAccess: false,
  "2025-feature": true,
};
```


## ✅ 참고사항
- 키 타입은 string 또는 number만 허용됩니다.
- symbol 타입의 인덱스 시그니처는 현재 지원되지 않습니다.
- 객체의 각 속성 타입이 동일하거나 공통된 타입일 때 유용합니다.
- 인덱스 시그니처와 함께 명시적인 속성을 정의할 수 있지만, 타입 충돌에 주의해야 합니다.
