import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="Navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/harmonograph">Harmonograph</Link>
        </li>
        <li>
          <Link to="/physics-playground">Physics Playground</Link>
        </li>
         <li>
          <Link to="/cipher">Cryptography Demo</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
