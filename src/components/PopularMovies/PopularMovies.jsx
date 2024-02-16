import { Link } from 'react-router-dom';

const PopularMovies = (popularMovies) => {
  return (
    <div>
      <ul>
        {popularMovies.map((popular) => (
          <li key={popular.id}>
            <h2>{popular.title}</h2>
            <Link to={`/movies/${popular.id}`}>
              <img src={popular.poster_url} alt={popular.title} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default PopularMovies;
