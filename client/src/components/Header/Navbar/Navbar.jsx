import React from 'react';
import '../../../styles/components/Navbar.scss';
import NavItems from './NavItems/NavItems';
import NavIcons from './NavIcons/NavIcons';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">VinylStore</div>
      <NavItems />
      <NavIcons />
    </nav>
  );
};

export default Navbar;