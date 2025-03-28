## Error 처리

### Status Code
- 200 : Success
- 400 : Bad Request            // Client Error
- 401 : Unauthorized           // Client Error
- 403 : Forbidden              // Client Error
- 404 : Not Found              // Client Error
- 500 : Internal Server Error  // Server Error

### try-catch
- try-catch 문은 예외 처리(exception handling) 를 위한 구문으로, 프로그램이 오류(예외)가 발생했을 때 정상적으로 동작할 수 있도록 도와줍니다.
```jsx
try {
    // 예외가 발생할 가능성이 있는 코드
    let result = 10 / 0;  // 0으로 나누기 (자바스크립트에서는 Infinity로 처리됨)
    console.log(result.toFixed(2));  // 정상적인 코드 실행
} catch (error) {
    // 예외 발생 시 실행되는 코드
    console.error("에러 발생:", error.message);
} finally {
    // (선택적) 예외 발생 여부와 관계없이 실행되는 블록
    console.log("try-catch 블록 종료");
}
```
