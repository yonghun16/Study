// Cookie (쿠키)

// 도메인 단위로 저장
// 표준안 기준, 사이트당 최대 20개 및 4KB로 제한
// 영구 저장 불가능

// domain  : 유효 도메인 설정
// path    : 유효 경로 설정
// expires : 만료 날짜(UTF Date) 설정
// max-age : 만료 타이머(s) 설정

document.cookie = `a=1; domain=localhost; path=/abc`
document.cookie = `b=2; expires=${new Date(2026, 0, 16)}`
document.cookie = `a=3`

console.log(document.cookie)

function getCookie(name) {
  const cookie = document.cookie
    .split('; ')
    .find(cookie => cookie.split('=')[0] === name)
  return cookie
}

console.log(getCookie('a'))


// Storage(스토리지)

// 도메인 단위로 저장
// 5MB 저장
// 세선 혹은 영구 저장 가능

// sessionStorage : 브라우져 세션이 유지되는 동안에만 데이터 저장
// localStorage : 따로 제거하지 않으면 영구적으로 데이터 저장

// .getItem() : 데이터 조회
// .setItem() : 데이터 저장
// .removeItem() : 데이터 제거
// .clear() : 스토리지 초기화

localStorage.setItem('name', 'song')
console.log(localStorage.getItem('name'))
localStorage.removeItem('name')
console.log(localStorage.getItem('name'))

getCookie('name')
localStorage.clear()
