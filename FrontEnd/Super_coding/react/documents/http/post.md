## POST request


### POST 요청
- 기본적으로 서버에 데이터를 보낼 때 사용하는 HTTP 메소드
- 일반적으로 파일 업로드, Form 형태의 제출에서 많이 사용한다.

### Header
- Content-Type: application/x-www-form-urlencoded
  - body: key=value&key=value
- Content-Type: application/json
  - body: key: value

### Google Firebase
- 더미 데이터베이스를 만들어서 POST 요청을 보낼 수 있음.

### 백엔드 개발자와의 협업 꿀팁
- 1. 데이터 구조를 설계하는 회의에 초대를 해달라고 하건, 회의가 끝나고 구현 하기 전 먼저 결과를 공유해 달라고 부탁하기
- 2. 데이터 구조가 바뀌면, 기존에 있던 데이터를 싹 밀고, 새로운 망므으로 시작하기. 이 작업을 백엔드 개발자에게 적극적으로 부탁하기
- 3. 개발 환경이 배포가 되었으면, POSTMAN이나 GraphQL Playground 같은 API 명세를 볼 수 있는 페이지를 꼭 달라고 요청하기
