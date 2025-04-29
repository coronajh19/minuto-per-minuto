import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const currentPage =
    location.pathname === "/" ? "inicio" : location.pathname.replace("/", "");

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const navItems = [
    { path: "/", label: "Inicio" },
    { path: "/bienestar", label: "Sexualidad y Bienestar" },
    { path: "/lugares", label: "Lugares" },
    { path: "/eventos", label: "Eventos" },
    { path: "/contacto", label: "Contacto" },
  ];

  const getActiveClass = (path) => {
    const pageKey = path === "/" ? "inicio" : path.replace("/", "");
    return location.pathname === path ? `active-link active-${pageKey}` : "";
  };

  return (
    <nav className={`navbar navbar-${currentPage}`}>
      <div className="navbar-container">
        <Link to="/" className="logo">
          Minuto per Minuto
        </Link>

        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <li key={item.path}>
              <Link to={item.path} className={getActiveClass(item.path)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
