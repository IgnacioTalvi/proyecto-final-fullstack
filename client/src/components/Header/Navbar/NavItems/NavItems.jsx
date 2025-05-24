import React from 'react';
import "../../../../styles/components/NavItems.scss";

const NavItems = () => {
  return (
    <ul className="nav-items">
      <li className="nav-item"><a href="/">Inicio</a></li>
      <li className="nav-item"><a href="/productos">Productos</a></li>
      <li className="nav-item"><a href="/nosotros">Nosotros</a></li>
      <li className="nav-item"><a href="/contacto">Contacto</a></li>
    </ul>
  );
};

export default NavItems;
