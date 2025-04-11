// history

// JavaScript에서 history 객체는 브라우저의 세션 기록(방문한 페이지 기록)을 
// 조작하거나 확인할 때 사용돼요. 주로 SPA(Single Page Application) 개발에서 
// 많이 쓰이는데, 페이지를 새로고침하지 않고도 주소를 바꾸거나 
// 이전/다음 페이지로 이동할 수 있게 해줌


// 1. 뒤로가기, 앞으로 가기
history.back();  // 뒤로 가기
history.forward();  // 앞으로 가기
history.go(-1);  // 한 페이지 뒤로


// 2. URL 변경(페이지 새로고침 없이)
history.pushState({ page: 1 }, "title 1", "/page1");
history.replaceState({ page: 2 }, "title 2", "/page2");


// 3. popstate 이벤트 리스닝
window.addEventListener('popstate', (event) => {
  console.log('popstate!', event.state);
});


/* 언제 쓰냐면?
	•	SPA에서 URL에 따라 페이지 뷰를 다르게 보이게 할 때
	•	브라우저 내비게이션(뒤로가기/앞으로가기)을 감지해서 맞춤 동작할 때
	•	새로고침 없이 주소창만 바꾸고 싶을 때 (예: 탭 이동)
*/
