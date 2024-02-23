import { NavLink } from 'react-router-dom';
import css from './MovieInfo.module.css';

export const MovieInfo = ({ movies }) => {
  const defaultImg =
    'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';
  return (
    <div className={css.info}>
      <div>
        <img
          src={
            movies.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movies.poster_path}`
              : defaultImg
          }
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
      <div>
        <h3 className={css.h3}> Additional information</h3>
        <div className={css.information}>
          <NavLink className={css.cast} to="cast">
            Cast
          </NavLink>
          <NavLink className={css.reviews} to="reviews">
            Reviews
          </NavLink>
        </div>
      </div>
    </div>
  );
};
