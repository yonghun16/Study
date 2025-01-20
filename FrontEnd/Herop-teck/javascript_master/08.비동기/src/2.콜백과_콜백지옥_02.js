// 콜백(Callback) 패턴2 - 영화 검색 예시

const getMovies = (movieName, callback) => {
  fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${movieName}`)
    .then(res => res.json())
    .then(res => {
      console.log(res)       // 서버로부터 온 응답을 콘솔에 출력
      callback()
  })
}

getMovies('frozen', () => {
  console.log('겨울왕국')
  getMovies('avengers', () => {
    console.log('어벤져스!')
    getMovies('avatar', () => {
      console.log('아바타!')
    })
  })
})


