/* eslint-disable no-console */
import { FilmStructure } from '../../types/films';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';


type FilmCardProps = {
  filmCard: FilmStructure;
};

function FilmCard(props: FilmCardProps): JSX.Element {
  const navigate = useNavigate();

  const { filmCard } = props;
  const [userMouse, setUserMouse] = useState(filmCard);


  return (
    <article
      className="small-film-card catalog__films-card"
      //пока приходится сохранять состояние так криво ибо нет стейта. И мне оно пока не нужно особо. Но оно в дз...
      onMouseEnter={() => {console.log(userMouse); setUserMouse(filmCard);}}
      onClick={() => navigate(`/films/${filmCard.id}`) }
    >

      <div className="small-film-card__image">
        <img
          src={filmCard.posterImage}
          alt={filmCard.name}
          width="280"
          height="175"
        />
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
