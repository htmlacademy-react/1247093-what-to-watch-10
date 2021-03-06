/* eslint-disable no-console */
import Logo from '../../components/logo/logo';
import { FilmStructure } from '../../types/films';
import { useState, ChangeEvent } from 'react';
import { useParams } from 'react-router-dom';
import { ratingStars } from '../../const';
import React from 'react';

type AddReviewScreenProps = {
  filmsList: FilmStructure[];
};

function AddReview({ filmsList }: AddReviewScreenProps): JSX.Element {
  const [userReview, setUserReview] = useState('Review text');
  const [userRating, setRating] = useState(0);

  const params = useParams();
  const filmExample = filmsList.find(
    (item) => item.id === Number(params.id)
  ) as FilmStructure;

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={filmExample.previewImage} alt={filmExample.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="film-page.html" className="breadcrumbs__link">
                  {filmExample.name}
                </a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img
                  src="img/avatar.jpg"
                  alt="User avatar"
                  width="63"
                  height="63"
                />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img
            src={filmExample.posterImage}
            alt={` ${filmExample.name} poster`}
            width="218"
            height="327"
          />
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form">
          <div className="rating">
            <div className="rating__stars">
              {ratingStars.map((id) => (
                <React.Fragment key={id + filmExample.name}>
                  <input
                    className="rating__input"
                    id={`star-${id}`}
                    type="radio"
                    name="rating"
                    value={id}
                    checked={id === userRating}
                    onChange={(evt) => setRating(Number(evt.target.value))}
                    // ???? ?????????? ?????????????? ???????????????? checked ???????????? ?? radio-button ???????????? ?????? ???????????????? ?? ???????????????? ???????? ?????? ????. ???????????????? ???? ????????????????)
                  />
                  <label className="rating__label" htmlFor={`star-${id}`}>
                    {`Rating-${id}`}
                  </label>
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="add-review__text">
            <textarea
              className="add-review__textarea"
              name="review-text"
              id="review-text"
              placeholder={userReview}
              onChange={({ target }: ChangeEvent<HTMLTextAreaElement>) => {
                const value = target.value;
                setUserReview(value);
              }}
            >
            </textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AddReview;
