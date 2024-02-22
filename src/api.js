import axios from 'axios';

const API_KEY = '934686777ff3be0e5e86e1e7947ada56';
axios.defaults.BASE_URL = 'https://api.themoviedb.org/3';

const options = {
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
};

// const getMovieURl = (posterPath) => {
//   return `https://image.tmdb.org/t/p/w300/${posterPath}`;
// };
export const findMovies = async () => {
  const url = 'https://api.themoviedb.org/3/trending/movie/day';
  const { data } = await axios.get(url, options);

  return data.results;
};
export const getMovieDetail = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}`;
  const { data } = await axios.get(url, options);
  return data;
};

export const castInfo = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits`;

  const { data } = await axios.get(url, options);

  return data.cast;
};

export const reviewMovie = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews`;
  const { data } = await axios.get(url, options);
  return data.results;
};

export const searchMovie = async (query) => {
  const url = `https://api.themoviedb.org/3/movie`;
  const options = {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      query: query,
    },
  };
  const { data } = await axios.get(url, options);
  return data.results;
};
