import React from 'react';
import { useState, useEffect } from 'react';
import ProductsContainer from './ProductsContainer/ProductsContainer';
import FiltersSearchContainer from './FiltersSearchContainer/FiltersSearchContainer';

const Home = () => {

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState ('')
  const [filter, setFilter] = useState ([])
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
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const sortButtons = filter.map ((value) => 
    product.name.toLowerCase().includes(search.toLowerCase()) )

  const handleChange = (value) => {
    setSearch(value);
  }; 

  return (
    <div className="home">
      <FiltersSearchContainer 
          search={search} 
          setSearch={setSearch} />
      <ProductsContainer products={filterProducts} />
    </div>
  );
};

export default Home;