import { useState } from 'react';

const usePagination = (totalPages, initialPage = 1) => {
    const [currentPage, setCurrentPage] = useState(initialPage);
    

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const goToPage = (page) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  const getPageNumbers = () => {
    const maxPagesToShow = 4;
    const halfMaxPages = Math.floor(maxPagesToShow / 2);
    const startPage = Math.max(1, currentPage - halfMaxPages);
    const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    return Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);
  };

  return {
    currentPage,
    nextPage,
    prevPage,
    goToPage,
    getPageNumbers,
  };
};

export default usePagination;
