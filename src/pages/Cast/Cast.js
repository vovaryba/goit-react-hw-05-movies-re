import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as moviesAPI from 'services/movies-api';
import s from './Cast.module.css';
import defaultImage from './default.png';

const Cast = () => {
  const { slug } = useParams();
  const movieId = slug.match(/[a-z0-9]+$/)[0];
  const [actors, setActors] = useState(null);

  useEffect(() => {
    moviesAPI.fetchMovieCast(movieId).then(actors => setActors(actors.cast));
  }, [movieId]);

  return (
    <>
      {actors && (
        <ul className={s.actors}>
          {actors.map(actor => (
            <li key={actor.id} className={s.actor}>
              {actor.profile_path ? (
                <img
                  className={s.profile}
                  src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
                  alt={actor.name}
                />
              ) : (
                <img
                  className={s.profile}
                  src={defaultImage}
                  alt={actor.name}
                />
              )}
              <span className={s.name}>{actor.name}</span>
              <p>Role: {actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cast;
