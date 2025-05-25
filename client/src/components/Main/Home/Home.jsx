import React from 'react';
import ProductsContainer from './ProductsContainer/ProductsContainer';
import FiltersSearchContainer from './FiltersSearchContainer/FiltersSearchContainer';

const Home = () => {
  return (
    <div className="home">
      <FiltersSearchContainer />
      <ProductsContainer />
    </div>
  );
};

export default Home;