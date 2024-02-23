import { useLocation, useParams, Outlet } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { getMovieDetail } from '../api';
import { BackLink } from '../components/BackLink/BackLink';
import { MovieInfo } from '../components/MovieInfo/MovieInfo';

export default function MovieDetail() {
  const location = useLocation();
  const backLinkRef = useRef(location.state);
  const [error, setError] = useState(false);
  const [movieDetail, setMovieDetail] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        setError(false);
        const data = await getMovieDetail(movieId);
        setMovieDetail(data);
      } catch {
        setError(true);
      }
    }
    fetchData();
  }, [movieId]);
  return (
    <div>
      {error && <p>sorry!!!</p>}
      <BackLink href={backLinkRef.current ?? '/movies'}>Go to all movies</BackLink>
      {movieDetail && <MovieInfo movies={movieDetail} />}
      <Outlet />
    </div>
  );
}

// export default MovieDetail;
