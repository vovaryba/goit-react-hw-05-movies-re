import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as moviesAPI from 'services/movies-api';
import s from './Reviews.module.css';

const Reviews = () => {
  const { slug } = useParams();
  const movieId = slug.match(/[a-z0-9]+$/)[0];
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    moviesAPI
      .fetchMovieReviews(movieId)
      .then(reviews => setReviews(reviews.results));
  }, [movieId]);

  return (
    <>
      {reviews && reviews.length > 0 ? (
        <ul className={s.nolist}>
          {reviews.map(review => (
            <li key={review.id}>
              <h3 className={s.author}>{review.author}</h3>
              <p className={s.content}>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        'There are no reviews for this film yet.'
      )}
    </>
  );
};

export default Reviews;
