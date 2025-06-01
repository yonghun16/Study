# cors express setting


### 🔧 2. 기본 설정 (모든 출처 허용)
```js
const express = require('express');
const cors = require('cors');

const app = express();

// 전체 도메인 허용 (모든 요청 출처 허용)
app.use(cors());

// 라우터 예시
app.get('/api/data', (req, res) => {
  res.json({ message: 'CORS 적용됨!' });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
```


### 🎯 3. 특정 출처만 허용
```js
const corsOptions = {
  origin: 'https://example.com', // 허용할 출처
  methods: ['GET', 'POST'],      // 허용할 HTTP 메서드
  credentials: true              // 쿠키 허용 시 true
};

app.use(cors(corsOptions));
```


### 🍪 4. 쿠키 포함(Credentials 포함) 설정
```js
const corsOptions = {
  origin: 'http://localhost:3000', // 정확한 origin만 허용
  credentials: true,              // 쿠키 포함 허용
};

app.use(cors(corsOptions));

// 쿠키를 다루기 위한 추가 설정
app.use(express.json());
app.use(require('cookie-parser')());
```


### 🔄 5. 라우트 별로 CORS 설정하기
```js
app.get('/open', cors(), (req, res) => {
  res.send('모두에게 열려 있음');
});

app.get('/restricted', cors({ origin: 'https://example.com' }), (req, res) => {
  res.send('example.com만 접근 가능');
});
```


### ⚠️ 주의
- credentials: true를 사용할 경우, origin: '*'는 사용할 수 없습니다.
- 브라우저 쪽에서도 fetch 또는 axios 호출 시 withCredentials: true를 반드시 설정해야 쿠키가 전송됩니다
```js
// 클라이언트 (예: fetch)
fetch('http://localhost:4000/api', {
  method: 'GET',
  credentials: 'include', // 반드시 포함
});
```


