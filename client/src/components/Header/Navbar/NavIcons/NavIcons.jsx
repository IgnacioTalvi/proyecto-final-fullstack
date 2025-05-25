import React from 'react';
import './NavIcons.css';
import { FaShoppingCart, FaUser, FaHeart } from 'react-icons/fa';

const NavIcons = () => {
  return (
    <div className="nav-icons">
      <FaUser className="icon" />
      <FaHeart className="icon" />
      <FaShoppingCart className="icon" />
    </div>
  );
};

export default NavIcons;
