import FilmCard from '../../components/film-card/film-card';
import { FilmStructure } from '../../types/films';

type FilmListScreenProps = {
  filmsStructure: FilmStructure[];
};

function FilmList(props: FilmListScreenProps): JSX.Element {
  const { filmsStructure } = props;


  return (
    <div className="catalog__films-list">
      {filmsStructure.map((film: FilmStructure) => (
        <FilmCard filmCard={film} key={film.id + 1} />
      ))}
    </div>
  );
}

export default FilmList;
