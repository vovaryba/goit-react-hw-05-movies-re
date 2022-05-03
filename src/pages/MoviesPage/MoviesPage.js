import { useState, useEffect } from 'react';
import {
  Link,
  useNavigate,
  useLocation,
  useSearchParams,
} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import slugify from 'slugify';
import * as moviesAPI from 'services/movies-api';
import s from './MoviesPage.module.css';

const makeSlug = string =>
  slugify(string, {
    lower: true,
    strict: true,
  });

const MoviesPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [searchMovies, setSearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('query');

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    moviesAPI
      .fetchMovieSearch(searchQuery)
      .then(movies => setSearchMovies(movies.results));
  }, [searchQuery]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      request: '',
    },
  });

  const onSubmitForm = ({ request }) => {
    moviesAPI
      .fetchMovieSearch(request)
      .then(movies => setSearchMovies(movies.results));

    reset();

    navigate({ ...location, search: `query=${request}` });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmitForm)}
        autoComplete="off"
        className={s.searchform}
      >
        <input
          type="text"
          name="request"
          autoFocus
          {...register('request', {
            required: true,
          })}
        />
        <button type="submit">Search</button>
        {errors.request && (
          <span style={{ display: 'none' }}>
            {toast.error('Please enter the request')}
          </span>
        )}
      </form>

      {searchMovies.length > 0 && (
        <ul>
          {searchMovies.map(movie => (
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
      )}
    </>
  );
};

export default MoviesPage;
