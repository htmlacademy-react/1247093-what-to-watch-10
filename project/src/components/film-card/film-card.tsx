/* eslint-disable no-console */
import { FilmStructure } from '../../types/films';

type FilmCardProps = {
  filmCard: FilmStructure;
};

function FilmCard(props: FilmCardProps): JSX.Element {
  const { filmCard } = props;

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={filmCard.posterImage} alt={filmCard.name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">
          {filmCard.name}
        </a>
      </h3>
    </article>
  );
}

export default FilmCard;
