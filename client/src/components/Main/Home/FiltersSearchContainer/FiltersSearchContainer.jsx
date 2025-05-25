import React, { useState } from 'react';
import '../../../../styles/components/FiltersSearchContainer.scss';
import Search from './Search/Search';
import Filters from './Filters/Filters';

const FiltersSearchContainer = ({search, setSearch}) => {
  
// const handleChange = (value) => (event) => {
//     setSearch({ ...values, [value]: event.target.value });
//   };

  return (
    <section className="filters-search-container">
      <Search value={search} setSearch={setSearch} />
      <Filters />
    </section>
  );
};

export default FiltersSearchContainer;
