import React from "react";
import './Nav.css';
import { HiOutlineMenu } from 'react-icons/hi';

function Navbar({language, setLanguage}) {
  const handleLanguage = ()=>{
    setLanguage(language==='EN'?'ES':'EN');
  };
  return (
    <nav className="navbar">
      <div>
        <label onClick={handleLanguage} className="languages" htmlFor="toggle">EN</label>
        <div class="switch">
          <input type="checkbox" id="toggle" />
          <label onClick={handleLanguage} for="toggle"></label>
        </div>
        <label onClick={handleLanguage} className="languages" htmlFor="toggle">ES</label>
      </div>
      
      <label htmlFor="toggler" className="menuButton"><HiOutlineMenu /></label>
      <input type="checkbox" id="toggler" className="check" />
      <div className="menu">
        <div className="list">
              <a className="nav-link" href="#home">{language==='EN'?'Home':'Inicio'}</a>
              <a className="nav-link" href="#about">{language==='EN'?'About':'Acerca'}</a>
              <a className="nav-link" href="#skills">{language==='EN'?'Skills':'Habilidades'}</a>
              <a className="nav-link" href="#">{language==='EN'?'Contact':'Contacto'}</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
