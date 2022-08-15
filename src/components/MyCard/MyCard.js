import React from 'react';
import './MyCard.css';
import photo from '../../images/my-photo.jpeg';

export default function MyCard() {
  return (
    <section className="my-card">
      <img className="my-card__photo" src={photo} alt="Мое фото" />
      <h3 className="my-card__heading my-card__text">Евгений</h3>
      <h4 className="my-card__subheading my-card__text">
        {`Фронтенд-разработчик, ${new Date().getFullYear() - 1986} лет`}
      </h4>
      <p className="my-card__info my-card__text">
        Живу и родился в Москве. Я люблю слушать музыку, а ещё увлекаюсь баскетболом. Начал изучать программирование полтора года назад, полгода как изучаю его под присмотром команды Яндекс.Практикума. Мне настолько понравилось, что я решил опробовать себя на новом месте.
      </p>
      <ul className="my-card__links">
        <li className="my-card__link-item">
          <a
            className="my-card__link my-card__text"
            href="https://vk.com/kefirchek1985"
            target="_blank"
            rel="noreferrer"
          >
            ВКонтакте
          </a>
        </li>
        <li className="my-card__link-item">
          <a
            className="my-card__link my-card__text"
            href="https://github.com/ovodkov-evgeny"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </li>
      </ul>
    </section>
  );
}
