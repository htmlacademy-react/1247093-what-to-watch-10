/* eslint-disable no-console */
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeFilmsCount, loadMoreFilms } from '../../store/actions';
import { ButtonCondition } from '../../const';

function ShowMoreButton(): JSX.Element {
  const dispatch = useAppDispatch();
  const filmsFromState = useAppSelector((state) => state.filmListFromState);

  const MaxFilmsLength = useAppSelector((state) => state.MaxFilms); // 4
  const MinFilmsLength = useAppSelector((state) => state.MinFilms); // 0

  if (filmsFromState.length > MinFilmsLength && MaxFilmsLength >= filmsFromState.length) {
    dispatch(loadMoreFilms(ButtonCondition.Blocked));
  }

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={() => {
          dispatch(changeFilmsCount());
        }}
      >
        Show more
      </button>
    </div>
  );
}

export default ShowMoreButton;
