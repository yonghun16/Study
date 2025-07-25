import type { Metadata } from 'next';
import styles from '../../styles/home.module.css';
import Movie from '../../components/movie';

export const metadata: Metadata = {
  title: 'Home',
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  // return fetch(URL).then(res => res.json());
  const res = await fetch(API_URL);
  const json = await res.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie: { id: string; title: string; poster_path: string }) => (
      <Movie key={movie.id} {...movie} />
      ))}
    </div>
  )
}
