import React, { useEffect, useState } from 'react';
import './MoviesCardList.css';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import {
  MAX_MOVIES_1280,
  MAX_MOVIES_630,
  MAX_MOVIES_990,
  MAX_MOVIES_DEFAULT,
  MAX_MOVIES_STEP_1280,
  MAX_MOVIES_STEP_990,
  MAX_MOVIES_STEP_DEFAULT,
} from '../../utils/constants';

export default function MoviesCardList({ movies, errorMessage }) {
  const [maxMovies, setMaxMovies] = useState(0);
  const [step, setStep] = useState(0);
  const location = useLocation();

  const showMoreMovies = () => {
    setMaxMovies(maxMovies + step);
  };

  const setCardsTemplate = () => {
    const width = window.innerWidth;

    if (location.pathname === '/saved-movies') {
      setMaxMovies(movies.length);
    }

    if (width >= 1280) {
      setMaxMovies(MAX_MOVIES_1280);
      setStep(MAX_MOVIES_STEP_1280);
    } else if (width >= 990) {
      setMaxMovies(MAX_MOVIES_990);
      setStep(MAX_MOVIES_STEP_990);
    } else if (width >= 630) {
      setMaxMovies(MAX_MOVIES_630);
      setStep(MAX_MOVIES_STEP_DEFAULT);
    } else {
      setMaxMovies(MAX_MOVIES_DEFAULT);
      setStep(MAX_MOVIES_STEP_DEFAULT);
    }
  };

  useEffect(() => {
    setCardsTemplate();

    window.addEventListener('resize', () => {
      setTimeout(() => {
        setCardsTemplate();
      }, 500);
    });
  }, []);

  return (
    <div className="movies-card-list">
      {errorMessage
        ? <p className="movies-card-list__error-message">{errorMessage}</p>
        : (
          <ul className="movies-card-list__movies-container">
            {movies.map((movie, index) => {
              if (index < maxMovies) {
                return (
                  <MoviesCard
                    key={movie.id || movie.movieId}
                    movie={movie}
                  />
                );
              }
              return null;
            })}
          </ul>
        )}
      {movies.length > maxMovies && location.pathname !== '/saved-movies' && (
      <div className="movies-card-list__button-container">
        <button
          className="movies-card-list__more-button"
          type="button"
          onClick={showMoreMovies}
        >
          Ещё
        </button>
      </div>
      )}

    </div>
  );
}
