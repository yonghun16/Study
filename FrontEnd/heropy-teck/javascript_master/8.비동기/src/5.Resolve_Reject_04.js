// Resolve, Reject 그리고 에러 핸들링4 - 영화 검색 예시

const getMovies = movieName => {
  return new Promise((resolve, reject) => {
    fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${movieName}`)
      .then(res => res.json())
      .then(json => {                       // 정상적으로 then이 되었어도
        if (json.Response === 'False') {    // json.Respnse 가 에러가 뜨면
          resolve(json.Error)               // 에러를 출력
        }
        resolve(json)
      })
      .catch(err => {
      reject(err)
    })
  })
}

let loading = true

// .then()
getMovies('avengers')
  .then(movies => console.log('영화 목록: ',movies))
  .catch(error => console.log('에러 발생: ', error))
  .finally(() => loading = false)

// async/await
const wrap = async () => {
  try {
    const movies = await getMovies('avengers')
    console.log('영화 목록: ', movies)
  } catch (error) {
    console.log('에러 발생: ', error)
  } finally {
    loading = false
  }
}

wrap()
