import React from 'react';
import '../../../../../styles/components/Search.scss';
const Search = () => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Buscar productos..."
        className="search-input"
      />
    </div>
  );
};

export default Search;


