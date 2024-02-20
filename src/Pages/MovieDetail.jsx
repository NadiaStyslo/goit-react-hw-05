import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { getMovieDetail } from '../api';
import { BackLink } from '../components/BackLink/BackLink';
import { MovieInfo } from '../components/MovieInfo/MovieInfo';

export default function MovieDetail() {
  const location = useLocation;
  const backLinkRef = useRef(location.state);
  const [error, setError] = useState(false);
  const [movieDetail, setMovieDetail] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
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
      <BackLink href={backLinkRef.current ?? '/'}>Go Home page</BackLink>
      {movieDetail && <MovieInfo movies={movieDetail} />}
    </div>
  );
}

// export default MovieDetail;
