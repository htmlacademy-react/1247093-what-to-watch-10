import MainScreen from '../../pages/main/main';

type AppScreenProps = {
  filmsCount: number[];
  filmName: string;
  filmGenre: string;
  filmDate: number;
};

function App({
  filmsCount,
  filmName,
  filmGenre,
  filmDate,
}: AppScreenProps): JSX.Element {
  return (
    <MainScreen
      filmsCount={filmsCount}
      filmName={filmName}
      filmGenre={filmGenre}
      filmDate={filmDate}
    />
  );
}

export default App;
