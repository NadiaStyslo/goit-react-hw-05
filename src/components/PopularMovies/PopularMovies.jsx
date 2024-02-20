import { Link, useLocation } from 'react-router-dom';
import css from './PopularMovies.module.css';

const PopularMovies = ({ popularMovies }) => {
  const location = useLocation();
  return (
    <div>
      <ul>
        <h1 className={css.title}>Trending today</h1>
        {popularMovies.map(({ title, id }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={location}>
              <h2>{title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularMovies;
