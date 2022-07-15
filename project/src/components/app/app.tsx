/* eslint-disable quotes */
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { AppRoute, AuthorizationStatus } from "../../const";
import MainScreen from "../../pages/main/main";
import Film from "../../pages/film/film";
import MyList from "../../pages/my-list/my-list";
import Login from "../../pages/sing-in/login";
import AddReview from "../../pages/review/add-review";
import Player from "../../pages/player/player";
import NotFoundScreen from "../../pages/not-found-screen/not-found-screen";
import PrivateRoute from "../private-route/private-route";
import { FilmStructure } from "../../types/films";

type AppScreenProps = {
  filmsStructure: FilmStructure[];
  filmCard: FilmStructure;
};

function App({ filmsStructure, filmCard }: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={
            <MainScreen filmsStructure={filmsStructure} filmCard={filmCard} />
          }
        />
        <Route path={AppRoute.Film} element={<Film filmCard={filmCard}/>} />
        <Route
          path={AppRoute.AddReview}
          element={<AddReview filmReview={filmCard} />}
        />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route path={AppRoute.Player} element={<Player filmCard={filmCard}/>} />

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
