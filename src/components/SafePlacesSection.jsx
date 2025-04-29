import React from "react";
import "../styles.css";

const placesData = [
  {
    name: "XEGA",
    address: "Av. Manuel Llaneza, 68, Centro, 33208 Gijón, Asturias",
    description:
      "Asociación LGTB+ de Asturias que promueve derechos, apoyo psicológico, recursos y eventos.",
    city: "Gijón",
    type: "Asociación",
  },
  {
    name: "Gaylic Bar",
    address: "C. de Claudio Alvargonzález, 4, Centro, 33201 Gijón, Asturias",
    description: "Bar con ambiente diverso y programación queer divertida.",
    city: "Gijón",
    type: "Bar",
  },
  {
    name: "Discoteca Olympo",
    address: "C. Campoamor, 19, 33001 Oviedo, Asturias",
    description: "Discoteca de ambiente LGBTQ+ con música variada.",
    city: "Oviedo",
    type: "Discoteca",
  },
  {
    name: "Neo Versaches",
    address: "C. Campoamor, 24, 33001 Oviedo, Asturias",
    description: "Bar/disco queer con fiestas temáticas y shows drag.",
    city: "Oviedo",
    type: "Bar / Disco",
  },
  {
    name: "Oh La La",
    address: "C. Sta. Lucía, 6, Centro, 33206 Gijón, Asturias",
    description: "Espacio moderno inclusivo con música bailable.",
    city: "Gijón",
    type: "Discoteca",
  },
  {
    name: "Toma 3",
    address: "C. Marqués de Casa Valdés, 27, Centro, 33202 Gijón, Asturias",
    description: "Cafetería y librería alternativa y segura para todes.",
    city: "Gijón",
    type: "Cafetería / Librería",
  },
];

function SafePlacesSection() {
  const ciudades = [...new Set(placesData.map((p) => p.city))];

  return (
    <section className="section seccion-lugares">
      <div className="hero-content content-constrain">
        <h2 className="titulo-dibujado" data-aos="fade-up">
          Lugares Seguros en Asturias
        </h2>
        <p className="hero-sub" data-aos="fade-up" data-aos-delay="100">
          Explora, conecta y celebra tu autenticidad
        </p>
      </div>

      <article className="article-section content-constrain">
        {ciudades.map((ciudad, idx) => (
          <div key={ciudad} data-aos="fade-up" data-aos-delay={idx * 100}>
            <h3 className="city-title">🏙️ {ciudad}</h3>
            <div className="places-grid">
              {placesData
                .filter((place) => place.city === ciudad)
                .map((place, index) => (
                  <div key={index} className="place-card">
                    <span className="place-tag">{place.type}</span>
                    <h4>{place.name}</h4>
                    <p className="place-address">{place.address}</p>
                    <p className="place-description">{place.description}</p>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}

export default SafePlacesSection;
