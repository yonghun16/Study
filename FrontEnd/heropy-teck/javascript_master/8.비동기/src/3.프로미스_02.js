// Promise 2

const getMovies = movieName => {
  return new Promise(resolve => {
    fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${movieName}`)
      .then(res => res.json())
      .then(res => {
        console.log(res)           // 서버로부터 온 응답을 콘솔에 출력
        resolve()
      })
  })
}

getMovies('frozen')
  .then(() => {
    console.log('겨울왕국')
    return getMovies('avengers')
  })
  .then(() => {
    console.log('어벤져스!')
    return getMovies('avatar')
  })
  .then(() => {
    console.log('아바타!')
  })

