import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2 className="logo">Minuto per Minuto</h2>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/recursos">Recursos</Link>
          </li>
          <li>
            <Link to="/lugares">Lugares</Link>
          </li>
          <li>
            <Link to="/eventos">Eventos</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
