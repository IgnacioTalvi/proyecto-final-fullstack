import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard/ProductCard';
import '../../../../styles/components/ProductsContainer.scss';

const ProductsContainer = () => {
  const [products, setProducts] = useState([]);
  const API_URL = "http://localhost:3001/api/products";

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id_product} product={product} />
      ))}
    </div>
  );
};

export default ProductsContainer;
