import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FilmCard from '../../components/film-card/film-card';

function MyList(): JSX.Element {
  return (
    <div className="user-page">
      <Header />

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          <FilmCard />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MyList;
