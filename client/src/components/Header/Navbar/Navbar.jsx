import React from 'react';
import '../../../styles/components/Navbar.scss';
import NavItems from './NavItems/NavItems';
import NavIcons from './NavIcons/NavIcons';
import Logo from './Logo'; // <-- nuevo import

const Navbar = () => {
  return (
    <nav className="navbar">
      <Logo />
      <NavItems />
      <NavIcons />
    </nav>
  );
};

export default Navbar;