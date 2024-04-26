// fetch(주소, 옵션)
// 네트워크를 통해 리소스의 요청(Request) 및 응답(Response)을 처리할 수 있습니다
// 'Promise 인스턴스'를 반환합니다.

fetch('https://www.omdbapi.com/?apikey=7035c60c&s=avengers')
  .then(res => res.json())
  .then(json => console.log(json))


const wrap = async () => {
  const res = await fetch('https://www.omdbapi.com/?apikey=7035c60c&s=avengers')
  const json = await res.json()
  console.log(json)
}
