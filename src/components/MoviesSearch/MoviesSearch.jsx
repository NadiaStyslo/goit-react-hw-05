import { NavLink, useLocation } from 'react-router-dom';
import css from './MovieSearch.module.css';

const MoviesSearch = ({ movies }) => {
  const location = useLocation();
  const defaultImg =
    'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';
  return (
    <div className={css.div}>
      <ul className={css.ul}>
        {movies.map((movie) => (
          <li key={movie.id} className={css.item}>
            <h2 className={css.title}> {movie.title}</h2>
            <NavLink to={`/movies/${movie.id}`} state={location} className={css.link}>
              <img
                className={css.link}
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    : defaultImg
                }
                alt={movie.title}
                width={180}
              />
              <p className={css.p}>{movie.release_date}</p>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MoviesSearch;
