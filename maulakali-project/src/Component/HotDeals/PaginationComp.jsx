import React from "react";
// import { FaFontAwesome } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const PaginationComp = ({
  currentPage,
  nextPage,
  prevPage,
  goToPage,
  getPageNumbers,
}) => {
  return (
    <div className="pagination-container">
      <button onClick={prevPage}>
        <FontAwesomeIcon icon={faChevronLeft} size="2xl" style={{padding: '0.5rem'}}/>
      </button>
      {getPageNumbers().map((page) => (
        <button
          key={page}
          onClick={() => goToPage(page)}
          className={`pagination-button ${
            currentPage === page ? "active" : ""
          }`}
        >
          {page}
        </button>
      ))}
      <button onClick={nextPage} style={{padding: '0.5rem'}}>
        <FontAwesomeIcon
          icon={faChevronRight}
          size="2xl"
                 
        />
      </button>
    </div>
  );
};

export default PaginationComp;
