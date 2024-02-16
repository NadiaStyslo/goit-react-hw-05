import axios from 'axios';
import findMovies from '../../api';
import { useEffect, useState } from 'react';

import PopularMovies from '../../components/PopularMovies/PopularMovies';

export default function Home() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setError(false);
        setLoading(true);
        const data = await findMovies();
        setPopularMovies(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setPopularMovies([]);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  return (
    <div>
      {error && <p>sorry!!!</p>}
      {loading && <p>loading, please wait</p>}
      {loading && popularMovies === 0 && <p>not popular movies</p>}
      {loading && popularMovies.length > 0 && <PopularMovies popularMovies={popularMovies} />}
    </div>
  );
}
