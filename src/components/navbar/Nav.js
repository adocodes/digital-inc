import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <nav className="nav-bar">
      <div className="container">
        <NavLink exact activeclassname="active" to="/digital-dope">
          Home
        </NavLink>
        <NavLink activeclassname="active" to="/about">
          About
        </NavLink>
        <NavLink activeclassname="active" to="/contact">
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
