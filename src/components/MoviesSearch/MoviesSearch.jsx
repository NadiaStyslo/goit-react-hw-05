import { Link, useLocation } from 'react-router-dom';

const MoviesSearch = ({ movies }) => {
  const location = useLocation();
  console.log(movies);
  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={location}></Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MoviesSearch;
