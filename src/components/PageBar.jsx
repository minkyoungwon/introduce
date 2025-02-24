// PageBar.jsx
import React from 'react';
import '../style/PageBar.css';

function PageBar({ currentPage, totalPages }) {
  const indicators = [];
  for (let i = 0; i < totalPages; i++) {
    indicators.push(
      <div
        key={i}
        className={`page-indicator ${currentPage === i ? 'active' : ''}`}
      />
    );
  }

  return <div className="page-bar">{indicators}</div>;
}

export default PageBar;
