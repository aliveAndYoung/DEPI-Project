import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchTVSeries, IMG_PATH } from '../API/TMDB.jsx';
import PaginationComponent from '../components/Layout/Pagination';


const TVSeries = (  {darkMode}
) => {
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useQuery({
    queryKey: ['tvSeries', page],
    queryFn: fetchTVSeries,
  });

  const totalPages = data?.total_pages || 1;



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
    <h1 className="text-center mb-4">TV Shows</h1>
    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
      {data.results?.map((show) => (
        <div key={show.id} className="col">
            <div className="card h-100">
              <img src={IMG_PATH + show.poster_path} className="card-img-top" alt={show.name} />
              <div className="card-body">
                <h5 className="card-title">{show.name}</h5>
                <p className="card-text">First Air Date: {show.first_air_date}</p>
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

export default TVSeries;
