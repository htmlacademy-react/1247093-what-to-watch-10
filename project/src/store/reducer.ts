import { createReducer } from '@reduxjs/toolkit';
import {
  changeGenre,
  resetFilms,
  loadMoreFilms,
  changeFilmsCount,
  resetFilmsCount,
  changeTab,
} from './actions';
import { films } from '../mocks/mocks';
import { reviews } from '../mocks/reviews';

import { FilmsCountForView, ButtonCondition } from '../const';

const filmCard = films[0];

const initialState = {
  genreFromState: 'All genres',
  filmListFromState: films,
  allFilmsList: films,
  allReviewsList: reviews,
  fiimCard: filmCard,
  MaxFilms: FilmsCountForView.Max,
  MinFilms: FilmsCountForView.Min,
  StepFilms: FilmsCountForView.Step,
  LoadMoreFilms: ButtonCondition.Unblocked,
  tabFromState: 'Overview',
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
    .addCase(changeFilmsCount, (state) => {
      state.MaxFilms = state.MaxFilms + state.StepFilms;
    })
    .addCase(loadMoreFilms, (state, action) => {
      state.LoadMoreFilms = action.payload;
    })
    .addCase(changeTab, (state, action) => {
      state.tabFromState = action.payload;
    })
    .addCase(resetFilmsCount, (state) => {
      state.MaxFilms = FilmsCountForView.Max;
    })
    .addCase(resetFilms, (state) => {
      state.filmListFromState = films;
      state.allFilmsList = films;
      state.genreFromState = 'All genres';
      state.fiimCard = filmCard;
      state.LoadMoreFilms = ButtonCondition.Unblocked;
      state.MaxFilms = FilmsCountForView.Max;
      state.MinFilms = FilmsCountForView.Min;
      state.StepFilms = FilmsCountForView.Step;
      state.tabFromState = 'Overview';
      state.allReviewsList = reviews;
    });
});

export { reducer };
