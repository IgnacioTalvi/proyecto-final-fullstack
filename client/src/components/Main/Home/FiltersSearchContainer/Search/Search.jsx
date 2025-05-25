import React from 'react';
import '../../../../../styles/components/Search.scss';
const Search = ({search, setSearch}) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Buscar producto o proveedor..."
        className="search-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;


