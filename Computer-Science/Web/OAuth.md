# OAuth

- OAuth는 **“Open Authorization”**의 줄임말로, 제3의 애플리케이션이 사용자 비밀번호를 직접 저장하지 않고도 사용자의 리소스(예: 구글 프로필, 깃허브 저장소 등)에 제한된 접근 권한을 부여받을 수 있게 해주는 권한 위임 프로토콜


### 🧩 핵심 개념
| 용어                  | 설명                                                       |
|-----------------------|------------------------------------------------------------|
| Resource Owner        | 리소스를 소유한 사용자 (예: Google 계정을 가진 사람)       |
| Client                | 사용자 대신 API를 요청하는 제3자 앱 (예: 타임라인 정리 앱) |
| Authorization Server  | 권한을 부여하는 서버 (예: Google OAuth 서버)               |
| Resource Server       | 실제 데이터를 제공하는 서버 (예: Google API 서버)          |


### 🔐 OAuth의 주요 목적
- 사용자의 비밀번호 노출 없이, 다른 앱이 사용자 데이터를 접근하도록 허용
- 사용자는 어떤 앱이 어떤 권한을 언제까지 가졌는지 제어 가능
- 앱 개발자는 직접 로그인 시스템을 만들지 않아도 됨 (로그인 위임)


### 🔁 동작 흐름 (OAuth 2.0 기준)
1. 사용자 로그인 요청
  - → 클라이언트(앱)가 사용자를 인증 서버로 리디렉션
2. 사용자 동의
  - → 사용자는 권한 위임 페이지에서 어떤 정보에 접근을 허용할지 동의
3. Authorization Code 발급
  - → 인증 서버는 클라이언트에 일회용 코드를 줌 (Authorization Code)
4. Access Token 교환
  - → 클라이언트는 이 코드를 이용해 Access Token을 요청
5. API 요청
  - → 클라이언트는 Access Token을 이용해 사용자 데이터를 요청


### 🔓 OAuth와 로그인(Social Login) 차이
- OAuth 자체는 **인증(Authentication)**이 아닌 권한 위임(Authorization) 프로토콜.
- 하지만 Google, Facebook 로그인과 같은 **“소셜 로그인”**은 OAuth 위에 OpenID Connect라는 인증 계층을 추가해 사용자를 인증함.

| 구분               | 설명                                              |
|--------------------|---------------------------------------------------|
| OAuth              | 권한 위임 (Authorization) 프로토콜                |
| OpenID Connect     | 인증(Authentication)을 위한 확장 규격             |
| Social Login       | OAuth + OpenID Connect로 인증 및 권한 위임 수행   |


### 📌 OAuth 사용 예
- Google 로그인 → 구글 Drive 접근 권한 요청
- GitHub OAuth → 타사 앱에서 저장소 관리
- Kakao, Naver 로그인 → 쇼핑몰이나 블로그에서 로그인 처리
