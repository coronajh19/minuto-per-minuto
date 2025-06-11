import { MapPin, Coffee, Wine, Users, Music2 } from "lucide-react";
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
const iconMap = {
  Asociación: <Users />,
  "Cafetería / Librería": <Coffee />,
  Bar: <Wine />,
  "Bar / Disco": <Wine />,
  Discoteca: <Music2 />,
};

const colorMap = {
  Asociación: "#FFC65C",
  "Cafetería / Librería": "#D883A6",
  Bar: "#F3689B",
  "Bar / Disco": "#218380",
  Discoteca: "#73D2DE",
};

export default function SafePlacesSection() {
  const tipos = Object.keys(colorMap);

  return (
    <section className="section seccion-lugares">
      <div className="hero-content content-constrain">
        <h2 className="lugares-title" data-aos="fade-up">
          Lugares Seguros en Asturias
        </h2>
        <p className="lugares-sub" data-aos="fade-up" data-aos-delay="100">
          Explora, conecta y celebra tu autenticidad
        </p>
      </div>

      <article className="article-section content-constrain">
        {tipos.map((tipo, idx) => {
          const lista = placesData.filter((p) => p.type === tipo);
          if (!lista.length) return null;

          return (
            <div
              key={tipo}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              style={{ "--accent": colorMap[tipo] }}
            >
              <div className="type-header">
                <span className="type-icon">{iconMap[tipo]}</span>
                <h3 className="type-title">{tipo}</h3>
              </div>

              <div className="places-grid">
                {lista.map((place, i) => (
                  <div key={i} className="place-card">
                    <h4 className="place-name">{place.name}</h4>
                    <div className="place-city">
                      <MapPin size={16} />
                      <span>{place.city}</span>
                    </div>
                    <p className="place-address">{place.address}</p>
                    <p className="place-description">{place.description}</p>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        place.address
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="maps-button"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </article>
    </section>
  );
}
