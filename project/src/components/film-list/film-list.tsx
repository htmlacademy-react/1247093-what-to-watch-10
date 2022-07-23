import FilmCard from '../../components/film-card/film-card';
import { FilmStructure } from '../../types/films';

type FilmListScreenProps = {
  filmsFromState: FilmStructure[];
  MaxFilms: number;
  MinFilms: number;
};

function FilmList(props: FilmListScreenProps): JSX.Element {
  const { filmsFromState, MinFilms, MaxFilms } = props;

  return (
    <div className="catalog__films-list">
      {filmsFromState.slice(MinFilms, MaxFilms).map((film: FilmStructure) => (
        <FilmCard filmCard={film} key={film.id + 1} />
      ))}
    </div>
  );
}

export default FilmList;
