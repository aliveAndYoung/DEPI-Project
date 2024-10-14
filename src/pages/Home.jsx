import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchNowPlaying, IMG_PATH } from '../API/TMDB';

const Home = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['nowPlaying'],
    queryFn: fetchNowPlaying,
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

  const nowPlayingItems = data || [];

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Now Playing Movies and TV Shows</h1>
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
        {nowPlayingItems.length > 0 ? (
          nowPlayingItems.map((trend) => (
            <div key={trend.id} className="col">
              <div className="card h-100">
                <img src={IMG_PATH + trend.poster_path} className="card-img-top" alt={trend.title || trend.name} />
                <div className="card-body">
                  <h5 className="card-title">{trend.title || trend.name}</h5>
                  <p className="card-text">Release Date: {trend.release_date || trend.first_air_date}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center">No items available.</div>
        )}
      </div>
    </div>
  );
};

export default Home;
