import { NavLink, useLocation } from 'react-router-dom';
import css from './PopularMovies.module.css';

const PopularMovies = ({ popularMovies }) => {
  const location = useLocation();

  return (
    <div>
      <ul>
        <h1 className={css.title}>Trending today</h1>
        {popularMovies.map(({ title, id }) => (
          <li key={id}>
            <NavLink to={`/movies/${id}`} state={location} className={css.link}>
              <h2>{title}</h2>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularMovies;
