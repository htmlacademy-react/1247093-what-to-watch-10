import { createReducer } from '@reduxjs/toolkit';
import {
  changeGenre,
  resetFilms,
  loadMoreFilms,
  changeFilmsCount,
  resetFilmsCount,
  changeTab,
  downloadFilms,
  // requireAuthorization,
  setError,
  setDataLoadedStatus,
} from './actions';
import { filmOne } from '../mocks/mocks';
import { reviews } from '../mocks/reviews';
import { FilmsCountForView, ButtonCondition, AuthorizationStatus } from '../const';
import { Films,FilmStructure } from '../types/films';
// первая часть

const filmCard = filmOne;

type InitalState = {
  genreFromState: string,
  allReviewsList: typeof reviews,
  filmCard: FilmStructure,
  MaxFilms: FilmsCountForView,
  MinFilms: FilmsCountForView,
  StepFilms: FilmsCountForView.Step,
  LoadMoreFilms: boolean,
  tabFromState: string,
  authorizationStatus: AuthorizationStatus,
  error: string | null,
  isDataLoaded: boolean,
  filmListFromState: Films,
  allFilmsList: Films,
}

const initialState: InitalState = {
  genreFromState: 'All genres',
  allReviewsList: reviews,
  filmCard: filmCard,
  MaxFilms: FilmsCountForView.Max,
  MinFilms: FilmsCountForView.Min,
  StepFilms: FilmsCountForView.Step,
  LoadMoreFilms: ButtonCondition.Unblocked,
  tabFromState: 'Overview',
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isDataLoaded: false,
  filmListFromState: [],
  allFilmsList: [],
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
    .addCase(downloadFilms, (state, action) => {
      state.allFilmsList = action.payload;
      state.filmListFromState = action.payload;
      state.filmCard = action.payload[0];
    })
    // .addCase(requireAuthorization, (state, action) => {
    //   state.authorizationStatus = action.payload;
    // })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(resetFilms, (state) => {
      state.filmListFromState = state.allFilmsList;
      // eslint-disable-next-line no-self-assign
      state.allFilmsList = state.allFilmsList;
      state.genreFromState = 'All genres';
      // state.filmCard = filmCard;
      state.LoadMoreFilms = ButtonCondition.Unblocked;
      state.MaxFilms = FilmsCountForView.Max;
      state.MinFilms = FilmsCountForView.Min;
      state.StepFilms = FilmsCountForView.Step;
      state.tabFromState = 'Overview';
      state.allReviewsList = reviews;
    });
});

export { reducer };
