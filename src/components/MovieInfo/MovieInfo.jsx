import { NavLink } from 'react-router-dom';
import css from './MovieInfo.module.css';

export const MovieInfo = ({ movies }) => {
  return (
    <div className={css.info}>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
          alt={movies.title}
          width="200"
        />
      </div>
      <div>
        <h2 className={css.title}>
          Name:{movies.title} ({movies.release_date.slice(0, 4)})
        </h2>
        <p className={css.score}>User Score:{Math.ceil(movies.popularity / 10)}%</p>
        <h3 className={css.h3}>
          Overwiev: <span className={css.span}>{movies.overview}</span>
        </h3>
        <h3 className={css.h3}>
          Genres:
          <span className={css.span}>{movies.genres.map((items) => items.name).join(' ')}</span>
        </h3>
      </div>
      <div className={css.information}>
        <h3 className={css.h3}> Additional information</h3>
        <NavLink to="cast"> Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </div>
    </div>
  );
};
