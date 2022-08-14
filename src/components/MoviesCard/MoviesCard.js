import React, { useState } from 'react';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';
import image from '../../images/placeholder-image.png';

export default function MoviesCard() {
  const [saved, setSaved] = useState();
  const location = useLocation();

  const handleActive = () => {
    setSaved(!saved);
  };

  const handleDelete = () => {
    setSaved(false);
  };

  return (
    <li className="movies-card">
      <div className="movies-card__info">
        <h3 className="movies-card__heading movies-card__text">В погоне за Бенкси</h3>
        <p className="movies-card__duration movies-card__text">27м</p>
      </div>
      <img className="movies-card__image" src={image} alt="В погоне за Бенкси" />
      {location.pathname !== '/saved-movies' ? (
          <button
            className={`movies-card__button movies-card__save-button ${saved && 'movies-card__save-button_active'}`}
            type="button"
            aria-label="Сохранить"
            onClick={handleActive}
          >Сохранить
          </button>
        ) : (
          <button
            className="movies-card__button movies-card__delete-button"
            type="button"
            aria-label="Удалить"
            onClick={handleDelete}
          />
        )}
    </li>
  );
}
