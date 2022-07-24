import { createAction } from '@reduxjs/toolkit';

export const resetFilms = createAction('film/resetFilms');
export const changeGenre = createAction('film/changeGenre', (value:string) => ({
  payload: value,
}));
export const loadMoreFilms = createAction('button/loadmore', (condition:boolean) => ({
  payload: condition,
}));
export const changeFilmsCount = createAction('film/changeCount');
export const resetFilmsCount = createAction('film/resetCount');
export const changeTab = createAction('tab/changeTab', (value:string) => ({
  payload: value,
}));
