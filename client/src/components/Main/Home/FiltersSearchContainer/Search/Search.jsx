import React from 'react';
import './Search.css';

const Search = () => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Buscar productos..."
        className="search-input"
      />
      <div className="filter-buttons">
        <button className="filter-btn">Relevancia</button>
        <button className="filter-btn">Precio</button>
        <button className="filter-btn">Nombre</button>
      </div>
    </div>
  );
};

export default Search;


