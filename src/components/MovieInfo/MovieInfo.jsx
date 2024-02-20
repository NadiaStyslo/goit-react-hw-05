import { NavLink } from 'react-router-dom';

export const MovieInfo = ({ movies }) => {
  return (
    <div>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
          alt={movies.title}
          width="200"
        />
        <h2>Name:{movies.title}</h2>
      </div>
    </div>
  );
};
