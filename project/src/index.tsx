import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const Films = {
  FILMS_COUNT: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
};

const FilmDescription = {
  filmName: 'The Grand Budapest Hotel',
  filmGenre: 'Drama',
  filmDate: 2014,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      filmsCount={Films.FILMS_COUNT}
      filmName={FilmDescription.filmName}
      filmGenre={FilmDescription.filmGenre}
      filmDate={FilmDescription.filmDate}
    />
  </React.StrictMode>
);
