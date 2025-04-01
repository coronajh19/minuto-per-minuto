import React from "react";
import { Link } from "react-router-dom";

function SidebarInteres() {
  return (
    <aside className="sidebar-interes">
      <h3>🌟 Información de Interés</h3>
      <ul>
        <li>
          <Link to="/eventos">📅 Próximos eventos</Link>
        </li>
        <li>
          <Link to="/sexualidad">🌈 Sexualidad y salud sexual</Link>
        </li>
        <li>
          <Link to="/blogs">✍️ Blogs y experiencias</Link>
        </li>
        <li>
          <Link to="/lugares">📍 Lugares seguros e inclusivos</Link>
        </li>
        <li>
          <Link to="/contacto">📞 Contacto y ayuda rápida</Link>
        </li>
      </ul>
    </aside>
  );
}

export default SidebarInteres;
