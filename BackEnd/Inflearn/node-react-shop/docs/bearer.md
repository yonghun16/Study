# Bearer

- Headers의 Bearer는 보통 HTTP 요청의 Authorization 헤더에서 사용하는 인증 방식 중 하나입니다.
- 주로 OAuth 2.0 인증 방식에서 토큰 기반 인증을 위해 사용됩니다.


### 📌 Bearer란?
- Bearer는 “이 토큰을 가진 자(bearer)는 인증된 사용자다”라는 의미입니다. 
- 즉, 접근 권한이 있는 토큰을 가지고 있다는 것만으로 인증을 인정하는 방식입니다.


### 📦 형식
```js
Authorization: Bearer <access_token>
```
- Bearer는 토큰 유형입니다.
- `<access_token>`은 서버가 발급한 액세스 토큰 (JWT 등) 입니다.


### 🔐 사용 예 (JavaScript - fetch)
```js
fetch("https://api.example.com/user", {
  method: "GET",
  headers: {
    "Authorization": "Bearer YOUR_ACCESS_TOKEN",
    "Content-Type": "application/json"
  }
});
```

### 🛡 특징
| 항목         | 설명                                                                 |
|--------------|----------------------------------------------------------------------|
| 인증 방식    | 토큰 기반 인증 (stateless)                                           |
| 사용 위치    | HTTP 요청 헤더의 `Authorization` 필드                                |
| 형식         | `Authorization: Bearer <access_token>`                               |
| 사용 예      | OAuth 2.0, JWT, REST API 인증 등                                     |
| 장점         | 세션 저장 불필요, 분산 시스템에 적합                                 |
| 단점         | 토큰 유출 시 누구나 접근 가능 (별도 확인 절차 없음)                  |
| 보안 필요사항| HTTPS 필수 (토큰이 평문으로 노출되기 쉬움)                           |
| 토큰 관리    | 보통 클라이언트가 로컬 스토리지, 세션 스토리지 또는 메모리에 저장    |
| 유효 기간    | 일반적으로 짧은 유효기간의 access token + 긴 유효기간의 refresh token 사용 |
