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

// Fetch trending movies or TV shows with pagination and total pages
export const fetchTrending = async ({ queryKey }) => {
  const [_key, page] = queryKey; // queryKey contains key and page
  try {
    const response = await tmdbApi.get('/trending/all/day', { params: { page } });
    return {
      results: response.data.results,
      total_pages: response.data.total_pages,
    };
  } catch (error) {
    console.error('Error fetching trending:', error);
    throw error;
  }
};

// Fetch movies with pagination and total pages
export const fetchMovies = async ({ queryKey }) => {
  const [_key, page] = queryKey;
  try {
    const response = await tmdbApi.get('/discover/movie', { params: { page } });
    return {
      results: response.data.results,
      total_pages: response.data.total_pages,
    };
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

// Fetch TV series with pagination and total pages
export const fetchTVSeries = async ({ queryKey }) => {
  const [_key, page] = queryKey;
  try {
    const response = await tmdbApi.get('/discover/tv', { params: { page } });
    return {
      results: response.data.results,
      total_pages: response.data.total_pages,
    };
  } catch (error) {
    console.error('Error fetching TV series:', error);
    throw error;
  }
};

// Fetch details of a specific movie (no pagination required)
export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await tmdbApi.get(`/movie/${movieId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};

// Fetch upcoming movies with pagination and total pages
export const fetchUpcoming = async ({ queryKey }) => {
  const [_key, page] = queryKey;
  try {
    const response = await tmdbApi.get('/movie/upcoming', { params: { page } });
    return {
      results: response.data.results,
      total_pages: response.data.total_pages,
    };
  } catch (error) {
    console.error('Error fetching upcoming movies:', error);
    throw error;
  }
};

// Fetch top-rated movies with pagination and total pages
export const fetchTopRated = async ({ queryKey }) => {
  const [_key, page] = queryKey;
  try {
    const response = await tmdbApi.get('/movie/top_rated', { params: { page } });
    return {
      results: response.data.results,
      total_pages: response.data.total_pages,
    };
  } catch (error) {
    console.error('Error fetching top-rated movies:', error);
    throw error;
  }
};

// Fetch now-playing movies with pagination and total pages
export const fetchNowPlaying = async ({ queryKey }) => {
  const [_key, page] = queryKey;
  try {
    const response = await tmdbApi.get('/movie/now_playing', { params: { page } });
    return {
      results: response.data.results,
      total_pages: response.data.total_pages,
    };
  } catch (error) {
    console.error('Error fetching now-playing movies:', error);
    throw error;
  }
};
