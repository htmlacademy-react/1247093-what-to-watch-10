import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import MainScreen from '../../pages/main/main';
import Film from '../../pages/film/film';
import MyList from '../../pages/my-list/my-list';
import Login from '../../pages/sing-in/login';
import AddReview from '../../pages/review/add-review';
import Player from '../../pages/player/player';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import { useAppSelector } from '../../hooks';


function App(): JSX.Element {
  const filmsStructure = useAppSelector((state) => state.allFilmsList);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <MainScreen/>
          }
        />
        <Route path={AppRoute.Film} element={<Film filmsList={filmsStructure} />} />
        <Route
          path={AppRoute.AddReview}
          element={<AddReview filmsList={filmsStructure} />}
        />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route
          path={AppRoute.Player}
          element={<Player filmsList={filmsStructure} />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <MyList filmsStructure={filmsStructure} />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
