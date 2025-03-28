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
// async/await 
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
