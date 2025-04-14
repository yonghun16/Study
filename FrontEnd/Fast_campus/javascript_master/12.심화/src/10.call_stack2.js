// call_stack, Event Loop, Web APIs

// 전체적인 순서
// JS Code → Call Stack → Web APIs → Callback Queue → Event Loop → Call Stack

/* 1. Call Stack (콜 스택)
	•	자바스크립트는 싱글 스레드 언어야. 즉, 한 번에 하나의 작업만 할 수 있어.
	•	이 작업들을 처리하는 곳이 바로 Call Stack.
	•	함수가 호출되면 스택에 쌓이고, 끝나면 스택에서 빠져나와.
*/
function greet() {
  console.log("Hello");
}
greet();
// → greet()가 Call Stack에 올라가고, console.log도 호출되어 실행되고, 순차적으로 빠짐.


/* 2. Web APIs
	•	브라우저가 제공하는 기능들이야. 예를 들어:
	•	setTimeout
	•	DOM Events
	•	fetch 등
	•	JS 엔진 자체에는 비동기 기능이 없고, Web API가 대신 처리해줘.
*/
setTimeout(() => {
  console.log("Later");
}, 1000);
// setTimeout은 Web API로 전달됨 → 타이머 시작 → 끝나면 콜백을 Callback Queue에 넣어둬.


/* 3. Callback Queue (또는 Task Queue)
	•	Web API가 끝난 후 실행할 콜백 함수들이 대기하는 줄.
	•	하지만 바로 실행되진 않아. 왜냐면 JS는 아직 Call Stack에서 뭔가 하고 있을 수 있거든.
*/


/* 4. Event Loop
	•	이게 바로 중재자 역할!
	•	반복해서 Call Stack이 비어 있는지 확인함.
	•	비어 있다면 Callback Queue에서 콜백 하나 꺼내서 Call Stack에 넣어줌 → 실행됨.
*/


