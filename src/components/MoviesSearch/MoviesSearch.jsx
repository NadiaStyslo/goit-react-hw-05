import { Link, useLocation } from 'react-router-dom';

const MoviesSearch = ({ movies }) => {
  const location = useLocation();
  return (
    <div>
          <ul>{movies.map({ title, id })=>(
              <li key
      )}</ul>
    </div>
  );
};
export default MoviesSearch;
