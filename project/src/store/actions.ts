import { createAction } from '@reduxjs/toolkit';

export const resetFilms = createAction('film/resetFilms');
export const changeGenre = createAction('film/changeGenre', (value:string) => ({
  payload: value,
}));
