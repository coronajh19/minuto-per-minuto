import { Heart, Pill, Shield } from "lucide-react";
import { preventionData, highlightData } from "../data/prevention";
import "../styles.css";

const icons = { Heart, Pill, Shield };

export default function PreventionComparison() {
  return (
    <section className="section seccion-rosa">
      <div className="content-constrain">
        <h2 className="comparison-title" data-aos="fade-up">
          CONDÓN VS PrEP
        </h2>
        <p className="comparison-sub" data-aos="fade-up" data-aos-delay="100">
          Dos métodos, un mismo objetivo: protegerte. Conócelos y combínalos.
        </p>

        {/* Tarjetas principales */}
        <div
          className="comparison-grid"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {preventionData.map((item) => {
            const Icon = icons[item.icon];
            return (
              <div
                key={item.key}
                className={`comparison-card ${item.key}`}
                style={{
                  "--card-color": item.color,
                  "--card-bg": item.color + "20",
                }}
              >
                <div className="card-header">
                  <span className="card-icon">
                    <Icon />
                  </span>
                  <h3 className="card-title">{item.title}</h3>
                </div>
                <ul className="card-list">
                  {item.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Tarjeta destacada */}
        <div
          className="highlight-card"
          data-aos="fade-up"
          data-aos-delay="300"
          style={{
            "--highlight-color": highlightData.color,
            "--highlight-bg": highlightData.color + "20",
          }}
        >
          <div className="highlight-header">
            <span className="highlight-icon">
              {icons[highlightData.icon] && <Shield />}
            </span>
            <h3 className="highlight-title">{highlightData.title}</h3>
          </div>
          <p className="highlight-text">{highlightData.text}</p>
        </div>
      </div>
    </section>
  );
}
