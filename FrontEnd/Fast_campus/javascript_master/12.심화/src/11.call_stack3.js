
/* 5. 예제 */
console.log("1");

setTimeout(() => {
  console.log("2");
}, 1000);

console.log("3");
/*
실행 순서:
	1.	console.log("1") → Call Stack → 실행
	2.	setTimeout(...) → Web API로 넘김 → 1초 후 Callback Queue에 콜백 등록
	3.	console.log("3") → Call Stack → 실행
	4.	Call Stack이 비면 → Event Loop가 Callback Queue에서 콜백 꺼내 실행
	5.	console.log("2") 실행됨
*/
