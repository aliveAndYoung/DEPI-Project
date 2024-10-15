import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchTrending, IMG_PATH } from '../API/TMDB.jsx';
import PaginationComponent from '../components/Layout/Pagination';

const Trending = (  {darkMode}
) => {

  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useQuery({
    queryKey: ['trending', page],
    queryFn: fetchTrending,
  });

  const totalPages = data?.total_pages || 1;



  if (isLoading) return <div className="text-center mt-5">Loading...</div>;
  if (error) return <div className="text-center mt-5 text-danger">Error: {error.message}</div>;

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Trending Movies and TV Shows</h1>
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
        {data.results?.map((item) => (
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
       {/* Pagination */}
       <div className="d-flex justify-content-center mt-4">
        <PaginationComponent
          currentPage={page} 
          totalPages={totalPages} 
          onPageChange={setPage} 
          darkMode={darkMode} 
        />
      </div>
    </div>
  );
};

export default Trending;