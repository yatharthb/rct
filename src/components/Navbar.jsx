import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="Navbar">
      <button className="menu-icon" onClick={toggleMobileMenu}>
        {mobileMenuOpen ? <FiX /> : <FiMenu />}
      </button>
      <ul className={mobileMenuOpen ? 'nav-links active' : 'nav-links'}>
        <li>
          <Link to="/" onClick={toggleMobileMenu}>Home</Link>
        </li>
        <li>
          <Link to="/harmonograph" onClick={toggleMobileMenu}>Harmonograph</Link>
        </li>
        <li>
          <Link to="/physics-playground" onClick={toggleMobileMenu}>Physics Playground</Link>
        </li>
        <li>
          <Link to="/cipher" onClick={toggleMobileMenu}>Cryptography Demo</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
