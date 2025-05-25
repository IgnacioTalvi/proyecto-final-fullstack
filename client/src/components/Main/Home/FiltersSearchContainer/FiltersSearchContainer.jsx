import React from 'react';
import './FiltersSearchContainer.css';
import Search from './Search/Search';
import Filters from './Filters/Filters';

const FiltersSearchContainer = () => {
  return (
    <section className="filters-search-container">
      <Search />
      <Filters />
    </section>
  );
};

export default FiltersSearchContainer;
