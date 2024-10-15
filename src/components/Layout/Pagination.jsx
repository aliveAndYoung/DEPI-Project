import React from 'react';
import Pagination from 'react-bootstrap/Pagination';


const PaginationComponent = ({ currentPage, totalPages, onPageChange, darkMode }) => {
  const handleFirstPage = () => onPageChange(1);
  const handleLastPage = () => onPageChange(totalPages);
  const handleNextPage = () => onPageChange(Math.min(currentPage + 1, totalPages));
  const handlePrevPage = () => onPageChange(Math.max(currentPage - 1, 1));

  const paginationNumbers = [];
  for (let i = currentPage - 2; i < currentPage; i++) {
    if (i > 0) paginationNumbers.push(i);
  }
  paginationNumbers.push(currentPage);
  if (currentPage + 1 <= totalPages) {
    paginationNumbers.push(currentPage + 1);
  }

  return (
    <Pagination className='pagination-dark'>
      <Pagination.First onClick={handleFirstPage} disabled={currentPage === 1} />
      <Pagination.Prev onClick={handlePrevPage} disabled={currentPage === 1} />

      {paginationNumbers.map((pageNumber) => (
        <Pagination.Item key={pageNumber} active={pageNumber === currentPage} onClick={() => onPageChange(pageNumber)}>
          {pageNumber}
        </Pagination.Item>
      ))}

      {currentPage < totalPages && totalPages > currentPage + 1 && <Pagination.Ellipsis />}
      <Pagination.Next onClick={handleNextPage} disabled={currentPage === totalPages} />
      <Pagination.Last onClick={handleLastPage} disabled={currentPage === totalPages} />
    </Pagination>
  );
};

export default PaginationComponent;
