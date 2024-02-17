import { Link } from 'react-router-dom';

const PopularMovies = (popularMovies) => {
  return (
    <div>
      <ul>
        {popularMovies.map(({ title, id }) => (
          <li key={id}>
            <h2>{title}</h2>
            <Link to={`/movies/${id}`}></Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularMovies;
