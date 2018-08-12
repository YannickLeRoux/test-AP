import React from 'react';

import { NavLink, Link } from 'react-router-dom';

import '../assets/css/NavBar.css';


const NavBar = () => {
  return (
    <nav>
      <ul className="navbar">
        <li className="navbar-brand">
          <Link
            className="navbar-link"
            to="/"
          >
            Reactor
          </Link>
        </li>
        <li className="navbar-item login">
          <NavLink
            style={{ marginRight: 40 }}
            className="navbar-link"
            to="/getonboard"
          >
           Log In
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
