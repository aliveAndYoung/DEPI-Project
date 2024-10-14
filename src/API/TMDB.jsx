import axios from 'axios';
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';
export const IMG_PATH = 'https://image.tmdb.org/t/p/w500';


const tmdbApi = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});


export const fetchTrending = async () => {
  try {
    const response = await tmdbApi.get('/trending/all/day');
    return response.data.results;
  } catch (error) {
    console.error('Error fetching trending:', error);
    throw error;
  }
};

export const fetchMovies = async () => {
  try{const response = await tmdbApi.get('/discover/movie');
  return response.data.results;
} catch (error) {
  console.error('Error fetching movies:', error);
  throw error;
}
};

export const fetchTVSeries = async () => {
  try{const response = await tmdbApi.get('/discover/tv');
  return response.data.results;
} catch (error) {
  console.error('Error fetching TV series:', error);
  throw error;
}
};

export const fetchMovieDetails = async (movieId) => {
  try{const response = await tmdbApi.get(`/movie/${movieId}`);
  return response.data;
} catch (error) {
  console.error('Error fetching movie details:', error);
  throw error;
}
};


export const fetchUpcoming = async () => {
  try{const response = await tmdbApi.get('/movie/upcoming');
  return response.data.results;
} catch (error) {
  console.error('Error fetching upcoming movies:', error);
  throw error;
}
};

export const fetchTopRated = async () => {
  try{const response = await tmdbApi.get('/movie/top_rated');
  return response.data.results;
} catch (error) {
  console.error('Error fetching top rated movies:', error);
  throw error;
}
};

export const fetchNowPlaying = async () => {
  try{const response = await tmdbApi.get('/movie/now_playing');
  return response.data.results;
} catch (error) {
  console.error('Error fetching now playing movies:', error);
  throw error;
}
};
