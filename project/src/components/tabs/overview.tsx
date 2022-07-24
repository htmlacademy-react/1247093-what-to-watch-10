import { FilmStructure } from '../../types/films';

type overviewCardParameters = {
  filmExample: FilmStructure;
};

function Overview(props: overviewCardParameters): JSX.Element {
  const { filmExample } = props;

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{filmExample.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{filmExample.mark}</span>
          <span className="film-rating__count">
            {filmExample.scoresCount} ratings
          </span>
        </p>
      </div>

      <div className="film-card__text">
        {filmExample.description}

        <p className="film-card__director">
          <strong>Director: {filmExample.director}</strong>
        </p>

        <p className="film-card__starring">
          <strong>
            {filmExample.starring}
            and other
          </strong>
        </p>
      </div>
    </>
  );
}

export default Overview;
