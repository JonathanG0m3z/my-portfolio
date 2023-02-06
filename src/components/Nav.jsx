import React from "react";
import './Nav.css';
import { HiOutlineMenu } from 'react-icons/hi';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-brand">JonathanG0m3z</h1>
      <label htmlFor="toggler" className="menuButton"><HiOutlineMenu /></label>
      <input type="checkbox" id="toggler" className="check" />
      <div className="menu">
        <div className="list">
              <a className="nav-link" href="#">Inicio</a>
              <a className="nav-link" href="#">Acerca de</a>
              <a className="nav-link" href="#">Contacto</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
