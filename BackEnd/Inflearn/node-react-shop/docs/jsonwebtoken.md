# jsonwebtoken

```bash
npm install jsonwebtoken
```

- jsonwebtoken은 **Node.js에서 JWT (JSON Web Token)**을 생성하고 검증하기 위한 대표적인 라이브러리입니다. 
- 주로 사용자 인증과 권한 부여 기능에서 사용되며, 토큰 기반 인증 시스템을 구현할 때 핵심 도구로 사용됩니다.


### 🔐 JWT란?
- JWT는 인증된 사용자임을 증명하기 위해 사용하는 디지털 서명된 문자열입니다. 구조는 다음과 같습니다:

```text
헤더(Header).내용(Payload).서명(Signature)
```

| 구성 요소   |   설명   |
|-------------|----------|
| Header (헤더)      | 토큰의 타입 (`JWT`)과 서명 알고리즘 (`HS256`, `RS256` 등)을 명시 |
| Payload (페이로드) | 사용자 정보와 클레임(Claims)을 포함하는 데이터 영역`<br>`예: `userId`, `role`, `exp` 등 |
| Signature (서명)   | 헤더 + 페이로드를 비밀키로 서명한 값. 토큰의 위변조 방지 역할 |


### ✍️ 사용법

#### 1. 토큰 생성 (sign)
```js
const jwt = require('jsonwebtoken');

const payload = { userId: 123, role: 'admin' };
const secretKey = 'my-secret';
const token = jwt.sign(payload, secretKey, {
  expiresIn: '1h', // 1시간 후 만료
});

console.log(token);
```

#### 2. 토큰 검증 (verify)
```js
try {
  const decoded = jwt.verify(token, secretKey);
  console.log(decoded); // { userId: 123, role: 'admin', iat: ..., exp: ... }
} catch (err) {
  console.error('Invalid token', err);
}
```

#### 3. 토큰 해석 (decode) – 검증 없이 디코딩만
```js
const decoded = jwt.decode(token);
console.log(decoded);
```
