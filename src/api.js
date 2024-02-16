import axios from 'axios';

const API_KEY = '934686777ff3be0e5e86e1e7947ada56';
axios.defaults.BASE_URL = 'https://api.themoviedb.org/3';

const options = {
  params: {
    api_key: API_KEY,
  },
};
const getMovieURl = (posterPath) => {
  return `https://image.tmdb.org/t/p/w300/${posterPath}`;
};
const findMovies = async () => {
  const url = 'https://api.themoviedb.org/3/trending/movie/week?language=en-US';
  const response = await axios.get(url, options);
  return response.data.results.map((movie) => ({
    ...movie,
    poster_url: getMovieURl(movie.poster_path),
  }));
};
export default { findMovies, getMovieURl };
