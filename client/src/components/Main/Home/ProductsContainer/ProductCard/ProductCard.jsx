import React from 'react';
import { useNavigate } from "react-router-dom";
import '../../../../../styles/components/ProductCard.scss';

const ProductCard = ({ product, provider }) => {
  
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/providers/${product.provider_id}`);
  };

  return (
    <article className="product-card">
      <div onClick={handleClick}>
        <img src={product.img_url} alt={product.name} className="product_img" width="150px" />
        <h3>{product.name}</h3>
        <p>{product.price}€</p>
      </div>
        <button className='add-to-cart-btn'>Añadir al carrito</button>
    </article>
  );
};

export default ProductCard;
