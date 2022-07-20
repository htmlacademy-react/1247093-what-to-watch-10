import { FilmStructure } from '../../types/films';

type cardParameters = {
  cardStructure: FilmStructure;
};

function FilmCardLittle(props: cardParameters): JSX.Element {
  const { cardStructure } = props;

  return (
    <>
      <img
        src={cardStructure.posterImage}
        alt={cardStructure.name}
        width="280"
        height="175"
      />
      {}
    </>
  );
}

export default FilmCardLittle;
