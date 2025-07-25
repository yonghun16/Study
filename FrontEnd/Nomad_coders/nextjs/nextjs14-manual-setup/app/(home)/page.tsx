import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Home',
};

import Link from 'next/link';

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
    <div>
      {movies.map((movie: { id: string; title: string }) => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </div>
  )
}
