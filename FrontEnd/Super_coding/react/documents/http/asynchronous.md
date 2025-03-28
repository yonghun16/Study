## 비동기


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
