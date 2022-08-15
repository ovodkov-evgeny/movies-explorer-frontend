import React from 'react';
import './Promo.css';

export default function Promo() {
  return (
    <div className="promo-wrapper">
      <section className="promo">
      <h1 className="promo__heading">Учебный проект студента факультета Веб-разработки.</h1>
      <nav className="nav-tab">
        <ul className="nav-tab__links">
          <li className="nav-tab__link-item">
            <a className="nav-tab__link" href="#about-project">О проекте</a>
          </li>
          <li className="nav-tab__link-item">
            <a className="nav-tab__link" href="#techs">Технологии</a>
          </li>
          <li className="nav-tab__link-item">
            <a className="nav-tab__link" href="#about-me">Студент</a>
          </li>
        </ul>
      </nav>
    </section>
    </div>
  );
}
