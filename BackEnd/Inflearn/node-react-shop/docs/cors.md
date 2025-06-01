# CORS

- CORS는 Cross-Origin Resource Sharing의 약자로,
- 브라우저에서 **다른 출처(origin)**의 리소스에 접근할 수 있게 허용해주는 보안 정책입니다.


### 🧠 기본 개념
- Same-Origin Policy(동일 출처 정책): 기본적으로 브라우저는 다른 출처의 요청을 차단합니다.
- CORS는 이 제한을 명시적으로 완화하는 방법입니다.


### ✅ CORS 개념 요약
| 항목 | 설명 |
|------|------|
| **CORS란?** | 브라우저의 보안 정책 중 하나로, 한 출처(origin)에서 로드된 웹 애플리케이션이 다른 출처의 리소스를 요청할 수 있게 허용하는 메커니즘 |
| **기본 정책** | 동일 출처(Same-Origin Policy)에 따라, 출처가 다르면 요청이 제한됨 |
| **출처(origin)** | 프로토콜 + 도메인 + 포트 (예: `https://example.com:443`) |
| **CORS가 필요한 경우** | 프론트엔드(예: React 앱)가 API 서버(예: `api.example.com`)에 요청하는 경우 |
| **브라우저 역할** | 브라우저는 출처가 다를 경우 요청을 차단하거나, 서버의 응답에 따라 허용함 |
| **서버 설정 필요** | 서버는 응답 헤더에 `Access-Control-Allow-Origin` 등을 설정해야 함 |


### 🧩 주요 CORS 관련 HTTP 헤더
| 헤더명 | 설명 |
|--------|------|
| `Access-Control-Allow-Origin` | 허용할 origin을 명시 (`*`는 모든 출처 허용) |
| `Access-Control-Allow-Methods` | 허용할 HTTP 메서드 (예: `GET`, `POST`, `PUT` 등) |
| `Access-Control-Allow-Headers` | 허용할 요청 헤더들 (`Content-Type`, `Authorization` 등) |
| `Access-Control-Allow-Credentials` | 자격 정보(쿠키 등) 포함 요청 허용 여부 (`true` 설정 필요) |
| `Access-Control-Expose-Headers` | 클라이언트가 응답에서 접근 가능한 헤더 목록 명시 |
| `Access-Control-Max-Age` | preflight 요청 결과를 브라우저가 캐시하는 시간 (초 단위) |


### 🚦 CORS 요청 종류
| 요청 유형 | 설명        | 예시 조건 |
|-----------|-------------|-----------|
| **Simple Request** | 특별한 조건을 만족하는 요청으로, 브라우저가 preflight 없이 보냄 | `GET`, `POST`, `HEAD` + 특정 헤더만 사용 |
| **Preflight Request** | 브라우저가 실제 요청 전 `OPTIONS` 메서드로 서버에 요청 허용 여부 확인 | 커스텀 헤더 사용, `PUT`, `DELETE` 등 |
| **Credentialed Request** | 쿠키/Authorization 포함 요청 | `withCredentials: true` 사용 시, 서버도 `Allow-Credentials: true`와 정확한 Origin 응답 필요 |


### 🛠️ 개발 시 해결 팁
| 상황             | 해결 방법 |
|------------------|------------|
| 로컬 개발 중 CORS 오류 | 서버에서 `Access-Control-Allow-Origin: *` 또는 `http://localhost:3000` 등 명시 |
| 쿠키 필요 시 `*` 사용 금지 | 반드시 정확한 origin 설정 (`*` 사용 시 `Allow-Credentials`와 함께 사용 불가) |
| 프록시로 우회 | 프론트엔드 개발 서버에서 백엔드로 프록시 설정 (예: `vite`, `webpack devServer`) |



