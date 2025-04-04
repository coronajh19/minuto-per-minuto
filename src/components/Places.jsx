import React from "react";
import MapLugares from "./MapLugares"; // Asegúrate que el path esté bien

function Places() {
  const placesData = [
    {
      name: "XEGA",
      address: "Av. Manuel Llaneza, 68, Centro, 33208 Gijón, Asturias",
      description:
        "Asociación LGTB+ de Asturias que promueve derechos, apoyo psicológico, recursos y eventos.",
      coords: [43.53468212109474, -5.665746889320318],
      city: "Gijón",
      type: "Asociación",
    },
    {
      name: "Gaylic Bar",
      address: "C. de Claudio Alvargonzález, 4, Centro, 33201 Gijón, Asturias",
      description:
        "Bar con ambiente diverso y una programación queer divertida.",
      coords: [43.54595633656383, -5.6646052179406645],
      city: "Gijón",
      type: "Bar",
    },
    {
      name: "Discoteca Olympo",
      address: "C. Campoamor, 19, 33001 Oviedo, Asturias",
      description:
        "Discoteca de ambiente LGBTQ+ con música variada y temáticas nocturnas.",
      coords: [43.365971366390866, -5.852033957112713],
      city: "Oviedo",
      type: "Discoteca",
    },
    {
      name: "Neo Versaches",
      address: "C. Campoamor, 24, 33001 Oviedo, Asturias",
      description:
        "Bar/disco queer con fiestas temáticas, drag y cultura marica a tope.",
      coords: [43.366260565488396, -5.8530970891508645],
      city: "Oviedo",
      type: "Bar / Disco",
    },
    {
      name: "Oh La La",
      address: "C. Sta. Lucía, 6, Centro, 33206 Gijón, Asturias",
      description:
        "Espacio nocturno moderno con enfoque en inclusión y música bailable.",
      coords: [43.543212485191034, -5.663899987289192],
      city: "Gijón",
      type: "Discoteca",
    },
    {
      name: "Toma 3",
      address: "C. Marqués de Casa Valdés, 27, Centro, 33202 Gijón, Asturias",
      description:
        "Cafetería/Librería cultural en Gijón con ambiente alternativo y seguro para la diversidad.",
      coords: [43.54032358404838, -5.656370081725117],
      city: "Gijón",
      type: "Cafetería / Librería",
    },
  ];

  return (
    <section className="section">
      <h2>Lugares en Asturias</h2>
      <p>
        Explora sitios seguros y amigables para la comunidad en la región. El
        mapa muestra ubicaciones LGBTQ+ friendly en Oviedo y Gijón.
      </p>

      <MapLugares lugares={placesData} />

      {/* Agrupación por ciudad */}
      {["Gijón", "Oviedo"].map((ciudad) => (
        <div key={ciudad}>
          <h3
            style={{
              marginTop: "2rem",
              marginBottom: "1rem",
              color: "#ffc94f",
            }}
          >
            🏙️ {ciudad}
          </h3>
          <div className="places-grid">
            {placesData
              .filter((place) => place.city === ciudad)
              .map((place, index) => (
                <div key={index} className="place-card">
                  <span className="place-tag">{place.type}</span>
                  <h3>{place.name}</h3>
                  <p className="place-address">{place.address}</p>
                  <p>{place.description}</p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Places;
