import MoviesSearch from '../components/MoviesSearch/MoviesSearch';
import SearchInfo from '../components/SearchInfo/SearchInfo';
import { searchMovie } from '../api';

import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';

const Movies = () => {
  const [error, setError] = useState(false);
  const [params, setParams] = useSearchParams();
  const [results, setResults] = useState([]);
  const location = useLocation;

  const filter = params.get('query') ?? '';
  const changeParams = (newParams) => {
    params.set('query', newParams);
    setParams(params);
  };

  useEffect(() => {
    async function fetchSearch() {
      // if (query)
      // {
      // }
      try {
        const data = await searchMovie(filter);
        setError(false);
        setResults(data);
      } catch {
        setError(true);
      }
    }
    fetchSearch();
  }, [filter]);
  // console.log(results);
  return (
    <div>
      {error && <p>sorry!!!</p>}
      <SearchInfo onSearch={changeParams}></SearchInfo>
      <MoviesSearch movies={results} />
    </div>
  );
};

export default Movies;
