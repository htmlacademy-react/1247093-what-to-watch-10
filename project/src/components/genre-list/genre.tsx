/* eslint-disable no-console */
import { useAppDispatch, useAppSelector } from '../../hooks';
import { resetFilms, changeGenre } from '../../store/actions';

type GenreProp = {
  filmGenre: string;
};

function Genre(props: GenreProp): JSX.Element {
  const { filmGenre } = props;
  const genre = useAppSelector((state) => state.genreFromState);

  const dispatch = useAppDispatch();

  return (
    <li className={filmGenre === genre ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'}>
      <a
        href="#s"
        className="catalog__genres-link"
        onClick={() => {
          dispatch(resetFilms());
          dispatch(changeGenre(filmGenre));
        }}
      >
        {filmGenre}
      </a>
    </li>
  );
}
export default Genre;
