import React from "react";
import './Nav.css';
import { HiOutlineMenu } from 'react-icons/hi';
import englishCv from '../../cv/Cv-EN.pdf';
import spanishCv from '../../cv/Cv-ES.pdf';

function Navbar({language, setLanguage}) {
  const handleLanguage = ()=>{
    setLanguage(language==='EN'?'ES':'EN');
  };
  const cv = language==='EN'?englishCv:spanishCv;
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
              <a className="nav-link" href="#projects">{language==='EN'?'Projects':'Proyectos'}</a>
              <a className="nav-link" href="#contact">{language==='EN'?'Contact':'Contacto'}</a>
              <a className="nav-link" href={cv} download="Jonathan Gómez Sánchez">
                {language==='EN'?'Cv EN':'Cv ES'}
              </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
