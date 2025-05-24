import React from 'react';
import './NavIcons.css';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

const NavIcons = () => {
  return (
    <div className="nav-icons">
      <FaUser className="icon" />
      <FaShoppingCart className="icon" />
    </div>
  );
};

export default NavIcons;
