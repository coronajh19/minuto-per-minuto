import React, { useEffect, useState } from "react";

const navItems = [
  { id: "inicio", label: "Inicio" },
  { id: "bienestar", label: "Sexualidad y Bienestar" },
  { id: "lugares", label: "Lugares" },
  { id: "eventos", label: "Eventos" },
  { id: "contacto", label: "Contacto" },
];

function Navbar() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      { threshold: 0.15 }
    );

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);

      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar navbar-${activeSection}`}>
      <div className="navbar-container">
        <span className="logo" onClick={() => scrollTo("inicio")}>
          Minuto per Minuto
        </span>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          ☰
        </button>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <button
                className={`nav-btn ${
                  activeSection === id ? `active-${id}` : ""
                }`}
                onClick={() => scrollTo(id)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
