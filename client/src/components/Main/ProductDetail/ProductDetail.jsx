import React from 'react';
import { useState, useEffect } from 'react';

const ProductDetail = () => {

  const [provider, setProvider] = useState([]);

  const API_URL = `http://localhost:3001/api/providers/${id}`;
  
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
  }, [id]);

  return (
    <div className="home">
      <FiltersSearchContainer 
          search={search} 
          setSearch={setSearch} />
      <ProductsContainer products={filterProducts} />
    </div>
  );
};

export default ProductDetail;
