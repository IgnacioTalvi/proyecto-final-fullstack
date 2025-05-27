import React, { useCallback } from 'react';
import { useState, useEffect } from 'react';
import ProductsContainer from './ProductsContainer/ProductsContainer';
import FiltersSearchContainer from './FiltersSearchContainer/FiltersSearchContainer';

const Home = () => {

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState ('')
  const [sortBy, setSortBy] = useState('');

  const API_URL = "http://localhost:3001/api/products";

  // Fetch all products
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Error al obtener productos");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const filterProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()) ||
    product.provider_name.toLowerCase().includes(search.toLowerCase())
  );

const sortItems = (type) => {
  setSortBy((prev) => {
    if (prev === `${type}-asc`) return `${type}-desc`;
    return `${type}-asc`;
  });
};

const sorted = [...filterProducts].sort((a, b) => {
    switch (sortBy) {
    case 'nombre-asc':
      return a.name.localeCompare(b.name);
    case 'nombre-desc':
      return b.name.localeCompare(a.name);
    case 'precio-asc':
      return parseFloat(a.price) - parseFloat(b.price);
    case 'precio-desc':
      return parseFloat(b.price) - parseFloat(a.price);
    default:
      return 0;
  }
});

  const handleChange = (value) => {
    setSearch(value);
  }; 

  return (
    <div className="home">
      <FiltersSearchContainer 
          search={search} 
          setSearch={setSearch}
          sortBy={sortBy}
          sortItems={sortItems} />
      <ProductsContainer products={sorted} />
    </div>
  );
};

export default Home;