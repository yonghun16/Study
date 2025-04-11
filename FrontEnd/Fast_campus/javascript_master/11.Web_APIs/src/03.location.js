// Location

// 현재 페이지 정보를 반환하거나 제어합니다.

// .href  :  전체 URL 주소
// .protocol: 프로토콜
// .hostname: 도메인 이름
// .pathname: 도메인 이후 경로
// .host: 포트 번호를 포함한 도메인 이름
// .port: 포트 번호
// .hash: 해시 정보(페이지 ID)

// .assign(주소): 해당 '주소'로 페이지 이동
// .replace(주소): 해당 '주소'로 페이지 이동, 현재 페이지 히스토리 제거
// .reload(강력): 페이지 새로고침, `ture` 인수는 '강력' 새로고침

console.log(location)


/* 예시
// 주소: https://example.com:8080/path/page.html?user=kim#profile

location.href       // 전체 URL
// 👉 'https://example.com:8080/path/page.html?user=kim#profile'

location.hash       // 해시 (Fragment)
// 👉 '#profile'

location.pathname   // 경로
// 👉 '/path/page.html'

location.search     // 쿼리스트링
// 👉 '?user=kim'
*/
