import React from 'react';
import '../../../../../styles/components/ProductCard.scss';

const ProductCard = ({ product }) => {
  return (
    <article className="product-card">
      <img src={product.img_url} alt={product.name} className="product_img" width="150px" />
      <h3>{product.name}</h3>
      <p>{product.price}€</p>
      {/* <button>Comprar</button> */}
      <button className='add-to-cart-btn'>Añadir al carrito</button>
    </article>
  );
};

export default ProductCard;
