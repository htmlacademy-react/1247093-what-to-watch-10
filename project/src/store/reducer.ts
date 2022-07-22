import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, resetFilms } from './actions';
import { films } from '../mocks/mocks';

const initialState = {
  genreFromState: 'All genres',
  filmListFromState: films,
  allFilmsList: films,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genreFromState = action.payload;
      state.filmListFromState =
        action.payload === 'All genres'
          ? state.allFilmsList
          : state.filmListFromState.filter((item) => item.genre === action.payload);
    })
    .addCase(resetFilms, (state) => {
      state.filmListFromState = films;
      state.allFilmsList = films;
      state.genreFromState = 'All genres';
    });
});

export { reducer };
