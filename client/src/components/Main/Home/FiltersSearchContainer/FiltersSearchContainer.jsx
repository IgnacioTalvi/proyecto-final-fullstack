import React, { useState } from 'react';
import '../../../../styles/components/FiltersSearchContainer.scss';
import Search from './Search/Search';
import Filters from './Filters/Filters';

const FiltersSearchContainer = ({search, setSearch, sortBy, sortItems }) => {

  return (
    <section className="filters-search-container">
      <Search value={search} setSearch={setSearch} />
      <Filters sortBy={sortBy} sortItems={sortItems} />
    </section>
  );
};

export default FiltersSearchContainer;
