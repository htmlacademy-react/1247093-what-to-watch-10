/* eslint-disable no-console */
import { FilmStructure } from '../../types/films';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import VideoPlayer from '../video-player/video-player';
import FilmCardLittle from '../film-card/film-card-little';

type FilmCardProps = {
  filmCard: FilmStructure;
};

function FilmCard(props: FilmCardProps): JSX.Element {
  const navigate = useNavigate();

  const { filmCard } = props;
  const [userMouse, setUserMouse] = useState(filmCard);
  const [isVisibleFilmInfo, setVisibleFilmInfo] = useState(true);

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => {
        setUserMouse(userMouse);
        setTimeout(() => {
          setVisibleFilmInfo((prevState) => !prevState);
        }, 1000);
      }}
      onMouseLeave={() => {
        setVisibleFilmInfo(!isVisibleFilmInfo);
      }}
      onClick={() => navigate(`/films/${filmCard.id}`)}
    >
      <div className="small-film-card__image">
        {isVisibleFilmInfo ? (
          <FilmCardLittle cardStructure={filmCard} />
        ) : (
          <VideoPlayer playerStructure={filmCard} />
        )}
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to="/">
          {filmCard.name}
        </Link>
      </h3>
    </article>
  );
}

export default FilmCard;
