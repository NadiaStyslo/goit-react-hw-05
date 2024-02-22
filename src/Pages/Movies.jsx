import MoviesSearch from '../components/MoviesSearch/MoviesSearch';
import SearchInfo from '../components/SearchInfo/SearchInfo';
import { searchMovie } from '../api';

import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [results, setResults] = useState([]);
  useEffect(() => {
    const newQuery = searchParams.get('query') || ' ';
    if (newQuery) {
      MoviesSearch(newQuery);
    } else {
      setResults([]);
    }
  }, [searchParams]);
  return (
    <div>
      <SearchInfo></SearchInfo>
      <MoviesSearch></MoviesSearch>
    </div>
  );
};

export default Movies;
