import { useState, useEffect, lazy, Suspense } from 'react';
import {
  NavLink,
  Routes,
  Route,
  useParams,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import * as moviesAPI from 'services/movies-api';
import s from './MovieDetailsPage.module.css';

const Cast = lazy(() =>
  import('../Cast/Cast.js' /* webpackChunkName: "cast" */),
);
const Reviews = lazy(() =>
  import('../Reviews/Reviews.js' /* webpackChunkName: "reviews" */),
);

const MovieDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { slug } = useParams();
  const movieId = slug.match(/[a-z0-9]+$/)[0];

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    moviesAPI.fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  const goBack = () => navigate(location?.state?.from?.location ?? '/');

  return (
    <>
      <button type="button" onClick={goBack}>
        {location?.state?.from?.label ?? 'Back to trending movies'}
      </button>
      {movie && movie.status_code !== 34 ? (
        <>
          <div className={s.main_information}>
            <img
              className={s.poster}
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.title}
            />
            <div>
              <h1>
                {movie.title} ({movie.release_date.split('-')[0]})
              </h1>
              <p>User Score: {movie.vote_average * 10}%</p>
              <h2>Overview</h2>
              <p>{movie.overview}</p>
              <h2>Genres</h2>
              <div className={s.genres}>
                {movie.genres.map(genre => (
                  <span key={genre.id} className={s.genre}>
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div>
            <p>Additional information</p>
            <ul>
              <li>
                <NavLink
                  to="cast"
                  state={{
                    from: location?.state?.from ?? '/movies',
                  }}
                >
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="reviews"
                  state={{
                    from: location?.state?.from ?? '/movies',
                  }}
                >
                  Reviews
                </NavLink>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <h2>The resource you requested could not be found.</h2>
      )}

      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
