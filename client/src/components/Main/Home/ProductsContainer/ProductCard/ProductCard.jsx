import React from 'react';
import './ProductCard.css'; // O .scss si usás Sass

const ProductCard = ({ product }) => {
  return (
    <article className="product-card">
      <img src={product.img_url} alt={product.name} className="product_img" width="150px" />
      <h3>{product.name}</h3>
      <p>{product.price}€</p>
      <button>Comprar</button>
      <button>Añadir al carrito</button>
    </article>
  );
};

export default ProductCard;
