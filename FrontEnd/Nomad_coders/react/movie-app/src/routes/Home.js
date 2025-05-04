import React, { useState, useEffect } from 'react';
import Movie from '../components/Movie';

function Home() {

  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year')   // response에 fetch 데이타를 받음
    const json = await response.json();  // response를 json로 변환하고 json에 할당
    setMovies(json.data.movies);        // json 데이터를 movies에 할당
    setLoading(false);
  }

  useEffect(() => {
    getMovies();   // 로딩 시 1번만 영화 정보를 받아옴.
  }, []);

  return (
    <div>
      {loading
        ? <h1>Loading...</h1>
        : <div>{  // 로딩이 끝나면
          movies.map((movie) => (   // movies의 각각의 아이템이 movie에 대해서
            <Movie   // props로 movie을 전달
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))
        }</div>
      }
    </div>
  );

}
export default Home;
