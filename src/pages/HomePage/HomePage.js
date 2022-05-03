import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import slugify from 'slugify';
import * as moviesAPI from 'services/movies-api';

const makeSlug = string =>
  slugify(string, {
    lower: true,
    strict: true,
  });

const HomePage = () => {
  const location = useLocation();

  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    moviesAPI
      .fetchTrendingMovies()
      .then(movies => setPopularMovies(movies.results));
  }, []);

  return (
    <>
      <h1>Trending movies today:</h1>
      <ul>
        {popularMovies.map(movie => (
          <li key={movie.id}>
            <Link
              to={`/movies/${makeSlug(`${movie.title} ${movie.id}`)}`}
              state={{
                from: {
                  location,
                  label: 'Go back',
                },
              }}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HomePage;
