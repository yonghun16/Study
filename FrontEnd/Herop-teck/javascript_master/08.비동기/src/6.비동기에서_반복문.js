// 반복문에서 비동기 처리

const getMovies = movieName => {
  return new Promise(resolve => {
    fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${movieName}`)
      .then(res => res.json())
      .then(res => resolve(res))
  })
}

const titles = ['frozen', 'avengers', 'avatar']


// forEach 사용 시 titles의 배열 순으로 출력되지 않는다.
// titles.forEach(async title => {           // forEach의 매게변수로 wrap를 콜백으로 넣어줌
//   const movies = await getMovies(title)
//   console.log(title, movies)
// })


// for in 사용 시 titles의 배열 순으로 출력된다.
const wrap = async () => {
  for (const title of titles) {
    const movies = await getMovies(title)
    console.log(title, movies)
 }
}
wrap()

