import React from 'react';

import '../assets/css/NavBar.css';


const NavBar = () => {
  return (
    <nav>
      <ul className="navbar">
        <li className="navbar-brand">
          Reactor
        </li>
        <li className="navbar-item">
          Log In
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;