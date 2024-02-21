import { castInfo } from '../../api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CastInfo = () => {
  const [error, setError] = useState(false);
  const [castMovie, setCastMovie] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const dataId = await castInfo(movieId);
        setCastMovie(dataId);
      } catch {
        setError(true);
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <div>
      {error && <p>sorry!!!</p>}

      <ul>
        {castMovie.map(({ id, name, character, profile_path }) => (
          <li key={id}>
            <div>
              <h2>{name}</h2>
              <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt={name} width={150} />
              <p>{character}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CastInfo;
