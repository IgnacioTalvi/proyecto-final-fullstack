import React from 'react';
import '../../styles/components/Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© VinylStore 2025. Todos los derechos reservados.</p>
        <div className="footer-links">
          <a href="https://github.com/IgnacioTalvi/proyecto-final-fullstack" target="_blank">Link a proyecto GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
