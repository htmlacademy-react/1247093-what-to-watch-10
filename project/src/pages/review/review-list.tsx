import { FilmReviews } from '../../types/films';


type UserReviewsScreenProps = {
  reviewStructure: FilmReviews;
};

function ReviewList(props: UserReviewsScreenProps): JSX.Element {
  const { reviewStructure } = props;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">
          {reviewStructure.comment}
        </p>

        <footer className="review__details">
          <cite className="review__author"> {reviewStructure.user.name}</cite>
          <time className="review__date" dateTime={reviewStructure.date}>
            {reviewStructure.date}
          </time>
        </footer>
      </blockquote>

      <div className="review__rating">{reviewStructure.rating}</div>
    </div>
  );
}

export default ReviewList;
