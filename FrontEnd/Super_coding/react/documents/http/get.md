## GET Request

> https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Using_Fetch <br />

#### GET 요청을 직접 보내보기
- 필요한 것
  - URL
  - (브라우저에서 제공하는) fetch API
  - (선택) header 등 다른 옵션들

#### fetch
- fetch는 JavaScript에서 HTTP 요청을 보내고 응답을 처리하는 데 사용되는 API입니다. 비동기적으로 네트워크 요청을 보내고, 이를 처리할 수 있도록 도와줍니다. fetch는 기본적으로 Promise를 반환하므로, async/await 문법을 사용하여 비동기 처리를 할 수 있습니다.
```jsx
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('네트워크 오류');
    }
    return response.json(); // JSON으로 파싱
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('오류 발생:', error);
  });
```
```jsx
// async await 
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error('네트워크 오류');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('오류 발생:', error);
  }
}
fetchData();
```
```jsx
// JSON 가져오기
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    console.log('받은 데이터:', data);
  })
  .catch(error => console.log('오류:', error));

```

#### .then(), .catch()
- .then()은 Promise 객체에서 사용되는 메소드로, 비동기 작업이 완료된 후 실행될 코드를 지정하는 데 사용됩니다. fetch와 같은 비동기 작업에서 .then()을 사용하여 결과를 처리할 수 있습니다.
```jsx
promise.then(
  (result) => {
    // 작업이 성공했을 때 실행될 코드
  },
  (error) => {
    // 작업이 실패했을 때 실행될 코드
  }
);
```
```jsx
fetch('https://api.example.com/data')  // 비동기 HTTP 요청
  .then(response => {  // 요청이 성공적으로 완료되면 실행
    if (!response.ok) {
      throw new Error('응답이 실패했습니다!');
    }
    return response.json();  // JSON 형태로 응답 본문을 반환
  })
  .then(data => {  // 첫 번째 .then()에서 반환한 데이터로 실행
    console.log('데이터:', data);  // 데이터를 처리하는 코드
  })
  .catch(error => {  // 오류가 발생하면 실행
    console.error('오류:', error);  // 오류 처리
  });
```

#### Promise
- Promise는 비동기 작업이 완료될 때 그 결과를 처리할 수 있도록 해주는 객체입니다. 
- 비동기 작업이 완료된 후에 결과값을 반환하거나 오류를 처리할 수 있도록 '약속'합니다.
- Promise는 세 가지 상태를 가질 수 있습니다:
  - Pending (대기 중) : Promise가 아직 완료되지 않았고, 결과가 아직 반환되지 않은 상태.
  - Fulfilled (이행됨): Promise가 성공적으로 완료되어 결과를 반환한 상태.
  - Rejected (거부됨) : Promise가 실패하여 오류를 반환한 상태.
- 이렇게 Promise는 비동기 작업을 보다 직관적이고 관리하기 쉽게 만들어줍니다.
```jsx
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 1000);
});

promise
  .then((result) => {
    console.log(result);  // "작업 성공"
  })
  .catch((error) => {
    console.log(error);   // "작업 실패" (실패 시)
  });
```
- Async/Await
- 자바스크립트에서 Promise를 가지고 비동기를 동기처럼 사용하는 문법
```jsx
// async/await
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function process() {
  console.log('작업 시작');
  await sleep(1000);  // 1초 뒤에 작업이 끝날다고 가정
  console.log('작업 끝');
}

process();
```

#### 비동기
- 비동기 방식에서는 A 작업이 시작된 후, A 작업이 끝날 때까지 기다리지 않고 B 작업을 시작합니다. 예를 들어, 네트워크 요청을 보내고 응답을 기다리는 동안 다른 작업을 계속 처리할 수 있습니다.
- 여기서 setTimeout은 비동기 작업의 예시로, 2초 후에 A 작업이 끝난다고 가정하지만, 그 동안 B 작업은 기다리지 않고 바로 실행됩니다. 즉, B 작업이 A 작업이 끝나기 전에 먼저 실행됩니다.
```jsx
console.log('A 작업 시작');
setTimeout(() => {
  console.log('A 작업 끝');
}, 2000);  // 2초 뒤에 A 작업이 끝난다고 가정
console.log('B 작업 시작');
console.log('B 작업 끝');
```

