import Genre from '../../components/genre-list/genre';
import { FilmStructure } from '../../types/films';

type GenreListProps = {
  filmsList: FilmStructure[];
};

function GenreList(props: GenreListProps): JSX.Element {
  const { filmsList} = props;

  let filmGenreArray: string[] = ['All genres'];
  filmsList.forEach((item: typeof filmsList[0]) => {
    filmGenreArray.push(item.genre);
  });
  filmGenreArray = [...new Set(filmGenreArray)];

  return (
    <>
      <ul className="catalog__genres-list">
        {filmGenreArray.map((item) => (
          <Genre filmGenre={item} key={item + 1} />
        ))}
      </ul>
      {}
    </>
  );
}

export default GenreList;
