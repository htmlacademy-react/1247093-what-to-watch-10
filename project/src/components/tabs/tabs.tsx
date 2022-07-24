import { FilmStructure, FilmReview } from '../../types/films';
import Tab from '../tabs/tab-button';
import Details from './details';
import ReviewList from './reviews';
import Overview from './overview';
import { TabsSections} from '../../const';
import { useAppSelector } from '../../hooks';

type FilmProps = {
  filmExample: FilmStructure;
};

function Tabs(props: FilmProps): JSX.Element {

  const { filmExample } = props;
  const reviewsStructure: FilmReview[] = useAppSelector((state) => state.allReviewsList);
  const tabFromState = useAppSelector((state) => state.tabFromState);
  const tabsSectionsArray = Object.values(TabsSections);

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {tabsSectionsArray.map((item) => (
            <Tab tabMeaning={item} key={item + 1} />
          ))}
        </ul>
      </nav>

      {tabFromState === TabsSections.Overview && <Overview filmExample={filmExample} />}
      {tabFromState === TabsSections.Details && (
        <Details detailedCardStructure={filmExample} />
      )}
      {tabFromState === TabsSections.Reviews &&
        reviewsStructure.map((item) => (
          <ReviewList reviewExample={item} key={item.id + 1} />
        ))}
    </div>
  );
}

export default Tabs;
