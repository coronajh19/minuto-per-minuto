import { MapPin, Coffee, Wine, Users, Music2 } from "lucide-react";
import { placesData, placeTypes } from "../data/places";
import "../styles.css";

const iconMap = {
  Asociación: <Users />,
  "Cafetería / Librería": <Coffee />,
  Bar: <Wine />,
  "Bar / Disco": <Wine />,
  Discoteca: <Music2 />,
};

export default function SafePlacesSection() {
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
        {placeTypes.map((tipo, idx) => {
          const lista = placesData.filter((p) => p.type === tipo);
          if (!lista.length) return null;

          return (
            <div
              key={tipo}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className={`place-category category-${tipo
                .toLowerCase()
                .replace(/ /g, "-")}`}
            >
              <div className="type-header">
                <span className="type-icon">{iconMap[tipo]}</span>
                <h3 className="type-title">{tipo}</h3>
              </div>

              <div className="places-grid">
                {lista.map((place) => (
                  <div key={place.name} className="place-card">
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
