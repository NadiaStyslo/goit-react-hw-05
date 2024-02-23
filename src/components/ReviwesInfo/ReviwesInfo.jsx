import { reviewMovie } from '../../api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './ReviwesInfo.module.css';

const ReviewsInfo = () => {
  const [error, setError] = useState(false);
  const [reviews, setReview] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await reviewMovie(movieId);
        setReview(data);
      } catch {
        setError(true);
      }
    }
    fetchData();
  }, [movieId]);
  return (
    <div>
      {error && <p>sorry!!!</p>}
      <div>
        {reviews.length > 0 ? (
          <ul className={css.ul}>
            {reviews.map(({ id, author, content }) => (
              <li key={id}>
                <h2 className={css.title}>{author}</h2>
                <p className={css.p}>{content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p> Not now reviews. You can be first.</p>
        )}
      </div>
    </div>
  );
};
export default ReviewsInfo;
