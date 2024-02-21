import { castInfo } from '../../api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CastInfo = () => {
  const defaultImg =
    'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';
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
              <img
                src={profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}` : defaultImg}
                alt={name}
                width={150}
              />
              <p>{character}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CastInfo;
