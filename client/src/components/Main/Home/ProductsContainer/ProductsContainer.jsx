import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard/ProductCard';
import '../../../../styles/components/ProductsContainer.scss';

const ProductsContainer = ({products}) => {


  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id_product} product={product} />
      ))}
    </div>
  );
};

export default ProductsContainer;
