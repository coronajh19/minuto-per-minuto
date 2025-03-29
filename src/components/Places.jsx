// src/components/Places.jsx
import React from "react";

/**
 * Este componente maneja una lista de lugares o locales
 * LGBT-friendly en Asturias u otra región que desees.
 */
function Places() {
  const placesData = [
    {
      name: "Cafetería Inclusiva XYZ",
      address: "Calle Principal, 123, Asturias",
      description:
        "Un espacio seguro para reuniones tranquilas. Ofrecen café, charlas y talleres ocasionales.",
    },
    {
      name: "Bar Rainbow",
      address: "Calle Arco Iris, 45, Asturias",
      description:
        "Un bar nocturno con música en vivo y eventos semanales enfocados en la comunidad LGBT+.",
    },
  ];

  return (
    <section className="section">
      <h2>Lugares en Asturias</h2>
      <p>Explora sitios seguros y amigables para la comunidad en la región.</p>
      <ul>
        {placesData.map((place, index) => (
          <li key={index} style={{ marginBottom: "1rem" }}>
            <h3>{place.name}</h3>
            <p>{place.address}</p>
            <p>{place.description}</p>
          </li>
        ))}
      </ul>

      {/* 
        Si quieres permitir que la gente “sugiera” lugares,
        podrías meter aquí un formulario similar al de
        Events.jsx, guardando en localStorage o un backend.
      */}
    </section>
  );
}

export default Places;
