import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails, IMG_PATH } from '../API/TMDB';

const MovieDetails = () => {
  const { id } = useParams();
  const { data: movie, error, isLoading } = useQuery({
    queryKey: ['movieDetails', id],
    queryFn: () => fetchMovieDetails(id),
  });

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
        <div className="text-center p-4 bg-white rounded shadow">
          <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
            <span className="visually-hidden">Loading...</span>
          </div>
          <h2 className="mt-3">Loading...</h2>
          <p className="text-muted">Please wait while we fetch the data</p>
        </div>
      </div>
    );
  }
;
  if (error) return <div className="text-center mt-5 text-danger">Error: {error.message}</div>;

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4">
          <img src={IMG_PATH + movie.poster_path} className="img-fluid rounded" alt={movie.title} />
        </div>
        <div className="col-md-8">
          <h1 className="mb-3">{movie.title}</h1>
          <p className="lead">{movie.overview}</p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item bg-transparent text-secondary"><strong>Release Date:</strong> {movie.release_date}</li>
            <li className="list-group-item bg-transparent text-secondary"><strong>Rating:</strong> {movie.vote_average}/10</li>
            <li className="list-group-item bg-transparent text-secondary"><strong>Runtime:</strong> {movie.runtime} minutes</li>
            <li className="list-group-item bg-transparent text-secondary"><strong>Genres:</strong> {movie.genres.map(g => g.name).join(', ')}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
