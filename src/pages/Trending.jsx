import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchTrending, IMG_PATH } from '../API/TMDB';

const Trending = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['trending'],
    queryFn: fetchTrending,
  });

  if (isLoading) return <div className="text-center mt-5">Loading...</div>;
  if (error) return <div className="text-center mt-5 text-danger">Error: {error.message}</div>;

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Trending Movies and TV Shows</h1>
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
        {data.map((item) => (
          <div key={item.id} className="col">
            <div className="card h-100">
              <img 
                src={IMG_PATH + item.poster_path} 
                className="card-img-top" 
                alt={item.title || item.name} 
              />
              <div className="card-body">
                <h5 className="card-title">{item.title || item.name}</h5>
                <p className="card-text">
                  {item.media_type === 'movie' ? 'Movie' : 'TV Show'}
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    Release: {item.release_date || item.first_air_date}
                  </small>
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Rating: {item.vote_average}/10</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;