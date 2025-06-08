# async


```bash
npm install async
```

- async 패키지는 Node.js 환경에서 비동기 작업을 더 쉽게 구성하고 제어할 수 있도록 도와주는 유틸리티 라이브러리입니다. Promise가 널리 쓰이기 이전에는 콜백 지옥(callback hell)을 해결하기 위해 많이 사용되었고, 
- 지금도 콜백 기반 또는 제어 흐름이 복잡한 경우에 여전히 유용하게 사용됩니다.


## 🔧 주요 기능
| 함수               | 설명                                                                 |
|--------------------|----------------------------------------------------------------------|
| `parallel`         | 여러 비동기 작업을 **동시에 실행**하고, 모두 끝났을 때 콜백 호출         |
| `series`           | 여러 비동기 작업을 **순차적으로 실행**, 결과를 순서대로 수집              |
| `waterfall`        | 작업 간 **결과를 다음 작업에 전달**하며 순차 실행                         |
| `each`, `map`      | 배열을 순회하며 비동기 작업 실행 (`map`은 결과 배열 반환)                |
| `queue`            | 병렬 처리 제한이 있는 작업 큐를 구성 (비동기 작업 처리량 제어 가능)       |
| `retry`, `timeout` | 실패 시 재시도, 타임아웃 처리 등 제어 기능 제공                           |


## 🧪 간단한 사용 예시
### 1. parallel: 동시에 여러 작업 처리
```jsx
const async = require('async');

async.parallel([
  callback => setTimeout(() => callback(null, '작업 1 완료'), 1000),
  callback => setTimeout(() => callback(null, '작업 2 완료'), 500)
], (err, results) => {
  if (err) throw err;
  console.log(results); // ['작업 1 완료', '작업 2 완료']
});
```

### 2. series: 순차적으로 실행
```jsx
async.series([
  callback => setTimeout(() => callback(null, '1번 작업'), 1000),
  callback => setTimeout(() => callback(null, '2번 작업'), 500)
], (err, results) => {
  console.log(results); // ['1번 작업', '2번 작업']
});
```

### 3. waterfall: 결과를 다음 작업에 넘기기
```jsx
async.waterfall([
  callback => callback(null, '첫 값'),
  (arg1, callback) => callback(null, `${arg1} → 다음 단계`)
], (err, result) => {
  console.log(result); // '첫 값 → 다음 단계'
});
```

### ❗ 언제 사용하나요?
- 콜백 기반 코드를 구조화하고 싶을 때
- 복잡한 흐름 제어(순서, 병렬 처리, 에러 관리 등)가 필요할 때
- Node.js의 비동기 파일 처리나 네트워크 요청을 여러 개 관리할 때
